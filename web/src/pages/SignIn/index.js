import React from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
    email: Yup.string()
      .email('Email Not Valid')
      .required('Email Is Required'),
    password: Yup.string().required('Password is Required'),
  });

export default function SignIn() {
    function handleSubmit(data) {
        console.tron.log(data);
      }
  return (
    <>
      <img src={logo} alt="oBarber"/>
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name= "email" type="email" placeholder="Email" />
        <Input name= "password" type="password" placeholder="Password"
        />
        <button type="submit">Enter</button>
        <Link to="/register">Sign Up</Link>
      </Form>
    </>
  );
}
