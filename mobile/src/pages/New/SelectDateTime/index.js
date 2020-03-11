import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, } from './styles';
import Background from '../../../components/Background';
import DateTimeInput from '../../../components/DanteTimeInput';

export default function SelectDateTime() {
  const [date, setDate] = useState(new Date());
  return <Background>
    <Container>
      <DateTimeInput date={date} onChange={setDate} />
    </Container>
  </Background>;
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: 'Schedules',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={20} color='#FFF' />
    </TouchableOpacity>
  ),
});
