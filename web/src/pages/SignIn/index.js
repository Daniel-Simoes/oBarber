import React from 'react';

import { Link } from 'react-router-dom';


import logo from '~/assets/logo.svg';
export default function SignIn() {
  return (
    <>
      <img src={logo} alt="oBarber" />
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password"
        />
        <button type="submit">Enter</button>
        <Link to="/register">Sign In</Link>
      </form>
    </>
  );
}
