import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 10px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ContainerBanner = styled.View`
  align-items: center;
  background: #ffffff;
  width: 40%;
  height: 200px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  border-top-right-radius: 21px;
  border-bottom-right-radius: 21px;
`;

export const ContainerWrapperBanner = styled.View`
  margin-top: 20px;
  background: #ccc;
  width: 80%;
  height: 160px;
  border-radius: 2px;
`;

export const ContainerInfo = styled.View`
  padding: 14px;
  background: #ffffff;
  width: 60%;
  height: 200px;
  border-top-left-radius: 21px;
  border-bottom-left-radius: 21px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
`;

export const TextTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Overview = styled.Text`
  font-size: 12px;
  color: #696969;
`;

export const ImageBanner = styled.ImageBackground`
  justify-content: flex-start;
`;

export const Separator = styled.View`
  height: 1px;
  background: #ccc;
  margin-top: 7px;
  width: 1px;
`;
