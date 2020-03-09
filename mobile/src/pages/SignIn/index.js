import React from 'react';
import { Text } from 'react-native';
 import Input from '../../components/Input';
 import Button from '../../components/Button';
 import Background from '../../components/Background';

export default function SignIn() {
  return (
    <Background>
      <Text>Teste</Text>
      <Input
      style={{marginTop: 30}}
      icon='call'
      placeholder='Name'
      />
      <Button>Send</Button>
    </Background>

  );
}