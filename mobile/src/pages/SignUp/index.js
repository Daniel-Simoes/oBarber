import React from 'react';
import { Image } from 'react-native';
import logo from '../../assets/logo.png';

import Background from '../../components/Background';


import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLinkText,
  SignLink,
} from './styles';

export default function SignUp({ navigation }) {
  return (
    <Background>
      <Container>
        <Image source={logo} />
        <Form>
        <FormInput
            icon="person-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Name"
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Email"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Password"
          />
          <SubmitButton lonPress={() =>{}}>
            Enter
          </SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Sign In</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
