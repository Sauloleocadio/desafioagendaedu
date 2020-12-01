import React, {useState, useEffect} from 'react';
import {StyleSheet, StatusBar, Alert, View} from 'react-native';
import {API_KEY} from '@env';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import api from '../../services/api';

import {
  Container,
  ImageBanner,
  ImageBannerBottom,
  ContainerBanner,
  ContainerVote,
  TextVote,
  NameMovie,
  ContainerInfo,
  Introduction,
  ContainerTag,
  TextTags,
  ContainerWrapperTag,
  ContainerProduction,
  TextProduction,
  NameProduction,
} from './styles';

function Detailsmovies({navigation}) {
  const [genres, setGenres] = useState([]);
  const [productioncompanies, setProductioncompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;
    async function loadData() {
      try {
        await api
          .get(
            `/movie/${navigation.state.params.id}?api_key=${API_KEY}&language=pt-BR`,
          )
          .then(function (response) {
            if (!isCancelled) {
              setGenres(response.data.genres);
              setProductioncompanies(response.data.production_companies);
              setLoading(false);
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
  }, [navigation.state.params.id]);

  return (
    <Container>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBannerBottom
        blurRadius={8}
        style={styles.backgroundImage}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${navigation.state.params.poster_path}`,
        }}>
        <ContainerBanner>
          <ImageBanner
            style={styles.background}
            source={{
              uri: `https://image.tmdb.org/t/p/original/${navigation.state.params.poster_path}`,
            }}
          />
        </ContainerBanner>
        <ContainerVote value={navigation.state.params.vote_average}>
          <TextVote>{navigation.state.params.vote_average}</TextVote>
          <Icon name="star-border" size={30} color="#FFFFFF" />
        </ContainerVote>
      </ImageBannerBottom>
      <ContainerInfo>
        <NameMovie>{navigation.state.params.title}</NameMovie>
        <Introduction>{navigation.state.params.overview}</Introduction>
      </ContainerInfo>
      <ContainerWrapperTag>
        {loading ? (
          <SkeletonPlaceholder>
            <View
              style={{
                width: 300,
                height: 40,
              }}
            />
          </SkeletonPlaceholder>
        ) : (
          <>
            {genres.map((data) => (
              <ContainerTag
                value={navigation.state.params.vote_average}
                key={data.id}>
                <TextTags>{data.name}</TextTags>
              </ContainerTag>
            ))}
          </>
        )}
      </ContainerWrapperTag>

      <ContainerProduction>
        <NameProduction>Produção</NameProduction>
        {loading ? (
          <SkeletonPlaceholder>
            <View
              style={{
                width: 300,
                height: 40,
              }}
            />
          </SkeletonPlaceholder>
        ) : (
          <>
            {productioncompanies.map((datacomp) => (
              <TextProduction key={datacomp.id}>{datacomp.name}</TextProduction>
            ))}
          </>
        )}
      </ContainerProduction>
    </Container>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: 'cover',
  },
  background: {
    resizeMode: 'cover',
    width: null,
    height: null,
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'column',
  },
});

Detailsmovies.navigationOptions = {
  title: '',
  headerTransparent: true,
  headerTintColor: '#FFFFFF',
};

export default Detailsmovies;
