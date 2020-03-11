import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../components/Background';
import { updateProfileRequest } from '../../store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

import { FormInput, Separator, Container, LogoutButton, Title, Form, } from './styles';

import { SubmitButton } from '../SignIn/styles';


export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const emailRef = useRef();
  const passwordRef = useRef();
  const oldPasswordRef = useRef();
  const confirmPasswordRef = useRef();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [password, setPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }, [profile]);

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      })
    );
  }

  function handleLogout() {
    dispatch(signOut());
  }

  return (<Background>
            <Container>
              <Title>My Profile</Title>
              <Form>
                <FormInput
                  icon="person-outline"
                  autoCorrect={false}
                  autoCapitalize="none"
                  returnKeyType="next"
                  value={name}
                  onChangeText={setName}
                  onSubmitEditing={() => emailRef.current.focus()}
                  placeholder="Name"
                />
                <FormInput
                  icon="mail-outline"
                  keyboardType="email-address"
                  autoCorrect={false}
                  autoCapitalize="none"
                  ref={emailRef}
                  value={email}
                  onChangeText={setEmail}
                  returnKeyType="next"
                  onSubmitEditing={() => oldPasswordRef.current.focus()}
                  placeholder="Email"
                />
                <Separator />
                <FormInput
                  icon="lock-outline"
                  secureTextEntry
                  ref={oldPasswordRef}
                  value={oldPassword}
                  onChangeText={setOldPassword}
                  returnKeyType="next"
                  onSubmitEditing={() => passwordRef.current.focus()}
                  placeholder="Old Password"
                />
                <FormInput
                  icon="lock-outline"
                  secureTextEntry
                  returnKeyType="next"
                  value={password}
                  onChangeText={setPassword}
                  onSubmitEditing={() => confirmPasswordRef.current.focus()}
                  ref={passwordRef}
                  placeholder="New Password"
                />
                <FormInput
                  icon="lock-outline"
                  secureTextEntry
                  returnKeyType="send"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  onSubmitEditing={handleSubmit}
                  ref={confirmPasswordRef}
                  placeholder="Confirm the Password"
                />
                <SubmitButton onPress={handleSubmit}>Update Profile</SubmitButton>
                <LogoutButton onPress={handleLogout}>Sign Out</LogoutButton>
              </Form>
            </Container>
          </Background>
  );
}
      Profile.navigationOptions = {
        tabBarLabel: 'Meu perfil',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="person" size={20} color={tintColor} />
        ),
      };
