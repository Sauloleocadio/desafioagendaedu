import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerStars = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
`;

export const TextVote = styled.Text`
  font-size: 12px;
  font-weight: bold;
  margin-left: 10px;
  color: ${(props) =>
    props.value >= 0 && props.value <= 2
      ? '#c0392b'
      : props.value >= 2.1 && props.value <= 4
      ? '#f1c40f'
      : props.value >= 4.1 && props.value <= 7
      ? '#2980b9'
      : '#27ae60'};
`;
