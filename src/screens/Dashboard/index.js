import React, {useState, useEffect, useCallback} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Alert, View, ActivityIndicator, TouchableOpacity} from 'react-native';
import {API_KEY} from '@env';
import api from '../../services/api';
import Skeleton from '../../components/Skeleton';
import Listmovies from '../../components/Listmovies';

import {Container, ContainerBottom, List} from './styles';

function Dashboard({navigation}) {
  const [loading, setLoading] = useState(true);
  const [loadingfooter, setLoadingfooter] = useState(false);
  const [movies, setMovies] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let isCancelled = false;
    console.log('rodou useeffect');
    async function loadData() {
      try {
        await api
          .get(`/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${page}`)
          .then(function (response) {
            if (!isCancelled) {
              setTotal(response.data.total_results);
              setMovies([...movies, ...response.data.results]);
              setLoading(false);
              setLoadingfooter(true);
            }
          })
          .catch(function (error) {
            const errorStatus = error.response.status[0];
            if (errorStatus === 400) {
              Alert.alert('Não foi possivel achar essa requisição.');
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

            return false;
          });
      } catch (e) {
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

    loadData();

    return () => {
      isCancelled = true;
    };
  }, [page]);

  const handleLoadMore = useCallback(() => {
    if (total > 0 && movies.length === total) {
      return;
    } else {
      setPage(page + 1);
      setLoadingfooter(true);
    }
  }, [page, total, movies]);

  function reenderFooter() {
    return loadingfooter ? (
      <View style={{marginBottom: 10, alignItems: 'center'}}>
        <ActivityIndicator color="#c0392b" size={25} />
      </View>
    ) : null;
  }

  function handleDetails(data) {
    navigation.navigate('Detailsmovies', data);
  }

  return (
    <Container>
      {loading ? (
        <Skeleton />
      ) : (
        <ContainerBottom>
          <List
            windowSize={201}
            data={movies}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => String(index)}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.1}
            initialNumToRender={20}
            ListFooterComponent={reenderFooter}
            renderItem={({item}) => (
              <Listmovies data={item} handleDetails={handleDetails} />
            )}
          />
        </ContainerBottom>
      )}
    </Container>
  );
}

Dashboard.navigationOptions = ({navigation}) => ({
  title: 'Filmes populares',
  headerRight: () => (
    <TouchableOpacity
      style={{
        marginRight: 25,
      }}
      onPress={() => {
        navigation.navigate('Filtermovies');
      }}>
      <Icon name="search" size={30} color="#c0392b" />
    </TouchableOpacity>
  ),
});

export default Dashboard;
