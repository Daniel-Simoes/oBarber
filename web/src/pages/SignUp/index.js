import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.png';
import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
    name: Yup.string().required('Name Is Required'),
    email: Yup.string()
        .email('Email Not Valid')
        .required('Email Is Required'),
    password: Yup.string()
        .min(6, 'Password With Min 6 Characters')
        .required('Password is Required'),
});

export default function SignUp() {
    const dispatch = useDispatch();

    function handleSubmit({ name, email, password }) {
        dispatch(signUpRequest(name, email, password));
    }
    return (
        <>
            <img src={logo} alt="oBarber" />
            <Form onSubmit={handleSubmit} schema={schema}>
                <Input name="name" placeholder="Name" />
                <Input name="email" type="email" placeholder="Email" />
                <Input name="password" type="password" placeholder="Password" />
                <button type="submit">Create Acount</button>
                <Link to="/">Sign In</Link>
            </Form>
        </>
    );
}
