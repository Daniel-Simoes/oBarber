import React from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
    name: Yup.string()
      .required('Name Is Required'),
    email: Yup.string()
      .email('Email Not Valid')
      .required('Email Is Required'),
    password: Yup.string()
    .min(6, 'Password With Min 6 Characters')
    .required('Password is Required'),
  });

export default function SignUp() {
    function handleSubmit(data) {
        console.tron.log(data);
      }
  return (
    <>
      <img src={logo} alt="oBarber" />
      <Form  onSubmit={handleSubmit} schema={schema}>
        <Input name= "name" placeholder="Name" />
        <Input name= "email" type="email" placeholder="Email" />
        <Input name= "password" type="password" placeholder="Password"
        />
        <button type="submit">Create Acount</button>
        <Link to="/">Sign In</Link>
      </Form>
    </>
  );
}
