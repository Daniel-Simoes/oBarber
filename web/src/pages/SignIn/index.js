import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { MdMail, MdLock } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

// import TInput from '../../components/Input';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Email Not Valid')
        .required('Email Is Required'),
    password: Yup.string().required('Password is Required'),
});

export default function SignIn() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    function handleSubmit({ email, password }) {
        dispatch(signInRequest(email, password));
    }
    return (
        <>
            <img src={logo} alt="oBarber" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <>
                    {/* <TInput icon={MdMail} display="flex">
                        {' '} */}
                    <Input name="email" type="email" placeholder="email" />
                    {/* </TInput> */}

                    <Input
                        name="password"
                        type="password"
                        placeholder="password"
                    />
                </>
                <button type="submit">
                    {loading ? 'Loading...' : 'Enter'}
                </button>
                <Link to="/register">Sign Up</Link>
            </Form>
        </>
    );
}
