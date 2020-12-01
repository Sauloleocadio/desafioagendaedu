import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, ContainerStars, TextVote} from './styles';

function Voteaverage({data}) {
  return (
    <Container>
      {data.vote_average === 0 ? (
        <ContainerStars>
          <Icon name="star-border" size={20} color="#c0392b" />
          <Icon name="star-border" size={20} color="#c0392b" />
          <Icon name="star-border" size={20} color="#c0392b" />
          <Icon name="star-border" size={20} color="#c0392b" />
          <Icon name="star-border" size={20} color="#c0392b" />
          <TextVote value={data.vote_average}>{data.vote_average}</TextVote>
        </ContainerStars>
      ) : (
        <></>
      )}
      {data.vote_average > 0 && data.vote_average <= 2 ? (
        <ContainerStars>
          <Icon name="star-half" size={20} color="#c0392b" />
          <Icon name="star-border" size={20} color="#c0392b" />
          <Icon name="star-border" size={20} color="#c0392b" />
          <Icon name="star-border" size={20} color="#c0392b" />
          <Icon name="star-border" size={20} color="#c0392b" />
          <TextVote value={data.vote_average}>{data.vote_average}</TextVote>
        </ContainerStars>
      ) : (
        <></>
      )}
      {data.vote_average >= 3 && data.vote_average <= 4 ? (
        <ContainerStars>
          <Icon name="star" size={20} color="#f1c40f" />
          <Icon name="star-half" size={20} color="#f1c40f" />
          <Icon name="star-border" size={20} color="#f1c40f" />
          <Icon name="star-border" size={20} color="#f1c40f" />
          <Icon name="star-border" size={20} color="#f1c40f" />
          <TextVote value={data.vote_average}>{data.vote_average}</TextVote>
        </ContainerStars>
      ) : (
        <></>
      )}

      {data.vote_average >= 4.1 && data.vote_average <= 4.9 ? (
        <ContainerStars>
          <Icon name="star" size={20} color="#2980b9" />
          <Icon name="star" size={20} color="#2980b9" />
          <Icon name="star-border" size={20} color="#2980b9" />
          <Icon name="star-border" size={20} color="#2980b9" />
          <Icon name="star-border" size={20} color="#2980b9" />
          <TextVote value={data.vote_average}>{data.vote_average}</TextVote>
        </ContainerStars>
      ) : (
        <></>
      )}
      {data.vote_average >= 5 && data.vote_average <= 6.4 ? (
        <ContainerStars>
          <Icon name="star" size={20} color="#2980b9" />
          <Icon name="star" size={20} color="#2980b9" />
          <Icon name="star-half" size={20} color="#2980b9" />
          <Icon name="star-border" size={20} color="#2980b9" />
          <Icon name="star-border" size={20} color="#2980b9" />
          <TextVote value={data.vote_average}>{data.vote_average}</TextVote>
        </ContainerStars>
      ) : (
        <></>
      )}
      {data.vote_average >= 6.5 && data.vote_average <= 7 ? (
        <ContainerStars>
          <Icon name="star" size={20} color="#2980b9" />
          <Icon name="star" size={20} color="#2980b9" />
          <Icon name="star" size={20} color="#2980b9" />
          <Icon name="star-border" size={20} color="#2980b9" />
          <Icon name="star-border" size={20} color="#2980b9" />
          <TextVote value={data.vote_average}>{data.vote_average}</TextVote>
        </ContainerStars>
      ) : (
        <></>
      )}
      {data.vote_average >= 7.1 && data.vote_average <= 7.9 ? (
        <ContainerStars>
          <Icon name="star" size={20} color="#27ae60" />
          <Icon name="star" size={20} color="#27ae60" />
          <Icon name="star" size={20} color="#27ae60" />
          <Icon name="star-half" size={20} color="#27ae60" />
          <Icon name="star-border" size={20} color="#27ae60" />
          <TextVote value={data.vote_average}>{data.vote_average}</TextVote>
        </ContainerStars>
      ) : (
        <></>
      )}
      {data.vote_average >= 8 && data.vote_average <= 8.9 ? (
        <ContainerStars>
          <Icon name="star" size={20} color="#27ae60" />
          <Icon name="star" size={20} color="#27ae60" />
          <Icon name="star" size={20} color="#27ae60" />
          <Icon name="star" size={20} color="#27ae60" />
          <Icon name="star-border" size={20} color="#27ae60" />
          <TextVote value={data.vote_average}>{data.vote_average}</TextVote>
        </ContainerStars>
      ) : (
        <></>
      )}
      {data.vote_average >= 9 && data.vote_average <= 9.5 ? (
        <ContainerStars>
          <Icon name="star" size={20} color="#27ae60" />
          <Icon name="star" size={20} color="#27ae60" />
          <Icon name="star" size={20} color="#27ae60" />
          <Icon name="star" size={20} color="#27ae60" />
          <Icon name="star-half" size={20} color="#27ae60" />
          <TextVote value={data.vote_average}>{data.vote_average}</TextVote>
        </ContainerStars>
      ) : (
        <></>
      )}
      {data.vote_average >= 9.6 && data.vote_average <= 10 ? (
        <ContainerStars>
          <Icon name="star" size={20} color="#27ae60" />
          <Icon name="star" size={20} color="#27ae60" />
          <Icon name="star" size={20} color="#27ae60" />
          <Icon name="star" size={20} color="#27ae60" />
          <Icon name="star" size={20} color="#27ae60" />
          <TextVote value={data.vote_average}>{data.vote_average}</TextVote>
        </ContainerStars>
      ) : (
        <></>
      )}
    </Container>
  );
}

export default Voteaverage;
