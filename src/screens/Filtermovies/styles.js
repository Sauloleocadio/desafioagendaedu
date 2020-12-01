import styled from 'styled-components/native';
import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerBottom = styled.TouchableOpacity`
  margin-bottom: 160px;
`;

export const List = styled.FlatList``;

export const InputSearch = styled(Input)`
  margin-bottom: 10px;
  margin-top: 40px;
`;

export const SubmitButton = styled(Button)``;

export const ButtonSearch = styled.TouchableOpacity`
  background: #ffffff;
`;

export const TextSearch = styled.Text`
  font-size: 20px;
  margin-left: 20px;
  color: #696969;
`;

export const TextLastSearch = styled.Text`
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 20px;
  margin-left: 20px;
  color: #363636;
`;
