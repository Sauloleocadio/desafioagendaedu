import React, {useState, useEffect} from 'react';
import {Keyboard, Alert} from 'react-native';
import {API_KEY} from '@env';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';
import Skeleton from '../../components/Skeleton';
import Listmovies from '../../components/Listmovies';

import {
  Container,
  ContainerBottom,
  List,
  SubmitButton,
  InputSearch,
  ButtonSearch,
  TextSearch,
  TextLastSearch,
} from './styles';

function Filtermovies({navigation}) {
  const [visiblelastsearch, setVisiblelastsearch] = useState(true);
  const [lastsearch, setLastsearch] = useState('');
  const [search, setSearch] = useState('');
  const [disableButtoon, setDisablebuttoon] = useState(false);
  const [loadingbutton, setLoadingbutton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadStorage() {
      const storageuservalue = await AsyncStorage.getItem('@name_search');
      setLastsearch(storageuservalue);
    }
    loadStorage();
  }, []);

  async function loadData() {
    if (search === '') {
      return;
    }

    Keyboard.dismiss();
    setDisablebuttoon(true);
    setLoadingbutton(true);
    setLoading(true);
    try {
      await api
        .get(`/search/movie?api_key=${API_KEY}&query=${search}&language=pt`)
        .then(async function (response) {
          await AsyncStorage.setItem('@name_search', search);
          setMovies([...response.data.results]);
          setVisiblelastsearch(false);
          setLoading(false);
          setDisablebuttoon(false);
          setLoadingbutton(false);
        })
        .catch(function (error) {
          const errorStatus = error.response.status[0];
          if (errorStatus === 400) {
            Alert.alert('Não foi possivel achar essa requisição.');
            setDisablebuttoon(false);
            setLoadingbutton(false);
          } else {
            Alert.alert(
              'Usuário sem conexão, verifique sua internet!',
              'Deseja conectar novamente?',
              [
                {
                  text: 'Sim',
                  onPress: () => loadData(),
                },
                {
                  text: 'Aguardar',
                  onPress: () => {},
                  style: 'cancel',
                },
              ],
              {cancelable: false},
            );
          }
          setDisablebuttoon(false);
          setLoadingbutton(false);
          return false;
        });
    } catch (e) {
      setDisablebuttoon(false);
      setLoadingbutton(false);
      Alert.alert(
        'Usuário sem conexão, verifique sua internet!',
        'Deseja conectar novamente?',
        [
          {
            text: 'Sim',
            onPress: () => loadData(),
          },
          {
            text: 'Aguardar',
            onPress: () => {},
            style: 'cancel',
          },
        ],
        {cancelable: false},
      );
    }
  }

  function handleDetails(data) {
    navigation.navigate('Detailsmovies', data);
  }

  function handleLastSearch(value) {
    setSearch(value);
  }

  return (
    <Container>
      <InputSearch
        icon="search"
        placeholder="Digite o que deseja procurar"
        autoCorrect={false}
        autoCapitalize="none"
        returnKeyType="send"
        value={search}
        onChangeText={(text) => setSearch(text)}
        onSubmitEditing={loadData}
      />

      <SubmitButton
        loading={loadingbutton}
        onPress={loadData}
        disabled={disableButtoon}>
        Pesquisar
      </SubmitButton>

      {visiblelastsearch ? (
        <>
          <TextLastSearch>Buscar ultima pesquisa:</TextLastSearch>
          <ButtonSearch onPress={() => handleLastSearch(lastsearch)}>
            <TextSearch>- {lastsearch}</TextSearch>
          </ButtonSearch>
        </>
      ) : (
        <></>
      )}
      {loading ? (
        <Skeleton />
      ) : (
        <ContainerBottom>
          <List
            windowSize={201}
            data={movies}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => String(index)}
            renderItem={({item}) => (
              <Listmovies data={item} handleDetails={handleDetails} />
            )}
          />
        </ContainerBottom>
      )}
    </Container>
  );
}

Filtermovies.navigationOptions = {
  title: 'Filtro de filmes',
  headerShown: false,
  headerBackTitleVisible: false,
};

export default Filtermovies;
