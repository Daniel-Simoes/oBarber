import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Name = styled.Text`
  margin-top: 25px;
  font-size: 16px;
  font-weight: bold;
  color: #FFF;
  text-align: center;
`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
`;

export const ProvidersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  margin-top: 70px;
  padding: 0 20px;
`;

export const Provider = styled(RectButton)`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 20px;
  flex: 1;
  align-items: center;
  margin: 0 10px 20px;
`;
