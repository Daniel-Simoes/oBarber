import React from 'react';

import { Link } from 'react-router-dom';


import logo from '~/assets/logo.svg';
export default function SignUp() {
  return (
    <>
      <img src={logo} alt="oBarber" />
      <form>
        <input placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password"
        />
        <button type="submit">Create Acount</button>
        <Link to="/">Sign In</Link>
      </form>
    </>
  );
}
