import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const ImageBannerBottom = styled.ImageBackground`
  width: 100%;
  height: 320px;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
`;

export const ImageBanner = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const ContainerBanner = styled.View`
  margin-top: 90px;
  background: #ccc;
  width: 30%;
  height: 160px;
  border-radius: 2px;
`;

export const ContainerVote = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 130px;
  background: ${(props) =>
    props.value >= 0 && props.value <= 2
      ? '#c0392b'
      : props.value >= 2.1 && props.value <= 4
      ? '#f1c40f'
      : props.value >= 4.1 && props.value <= 7
      ? '#2980b9'
      : '#27ae60'};
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const TextVote = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #ffffff;
`;

export const ContainerInfo = styled.View`
  flex: 1;
  padding: 10px 20px 5px 20px;
`;

export const NameMovie = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #363636;
`;

export const Introduction = styled.Text`
  font-size: 14px;
  color: #696969;
`;

export const ContainerWrapperTag = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px 20px 5px 20px;
`;

export const ContainerTag = styled.View`
  margin-bottom: 5px;
  border-radius: 5px;
  padding: 5px;
  margin-right: 10px;
  background: ${(props) =>
    props.value >= 0 && props.value <= 2
      ? '#c0392b'
      : props.value >= 2.1 && props.value <= 4
      ? '#f1c40f'
      : props.value >= 4.1 && props.value <= 7
      ? '#2980b9'
      : '#27ae60'};
`;

export const TextTags = styled.Text`
  font-size: 12px;
  color: #ffffff;
`;

export const NameProduction = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #363636;
`;

export const ContainerProduction = styled.View`
  padding: 5px 20px 20px 20px;
`;

export const TextProduction = styled.Text`
  font-size: 12px;
  color: #696969;
`;
