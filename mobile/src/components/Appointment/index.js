import React from 'react';

import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Name, Time, Avatar, Info } from './styles';

export default function Appointment() {
  return (
    <Container>
      <Left>
        <Avatar
          source={{url:`https://api.adorable.io/avatar/50/obarber.png`}}/>
        <Info>
          <Name>Daniel Simões</Name>
          <Time>Em 4 Horas</Time>
        </Info>
      </Left>
        <TouchableOpacity onPress={() => {}}>
          <Icon name="event-busy" size={20} color='#f64c23' />
        </TouchableOpacity>
    </Container>
  );
}
