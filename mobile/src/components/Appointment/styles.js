import styled from 'styled-components/native';


export const Container = styled.View`
  margin-bottom: 15px;
  padding: 25px;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.3);
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  opacity: ${props => (props.past ? 0.5 : 1)};
`;

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Time = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: #AAA;
`;

export const Name = styled.Text`
font-weight: bold;
  margin-top: 4px;
  font-size: 16px;
  color: #FFF;
`;
