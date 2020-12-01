import React from 'react';
import Voteaverage from '../Voteaverage';

import {
  Container,
  TextTitle,
  ContainerBanner,
  ContainerWrapperBanner,
  ContainerInfo,
  ImageBanner,
  Overview,
  Separator,
} from './styles';

import {StyleSheet} from 'react-native';

function Listmovies({data, handleDetails}) {
  return (
    <Container onPress={() => handleDetails(data)}>
      <ContainerBanner>
        <ContainerWrapperBanner>
          <ImageBanner
            style={styles.backgroundImage}
            source={{
              uri: `https://image.tmdb.org/t/p/original/${data.poster_path}`,
            }}
          />
        </ContainerWrapperBanner>
      </ContainerBanner>
      <Separator />
      <ContainerInfo>
        <TextTitle>{data.title}</TextTitle>
        <Overview numberOfLines={4} ellipsizeMode="tail">
          {data.overview}
        </Overview>
        <Voteaverage data={data} />
      </ContainerInfo>
    </Container>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: 'cover',
    width: null,
    height: null,
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'column',
  },
});

export default Listmovies;
