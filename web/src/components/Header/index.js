import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/logo.svg';



import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="oBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
            <Notifications />
          <Profile>
            <div>
              <strong>Test</strong>
              <Link to="/profile">My Profile</Link>
            </div>
            <img
              src= "https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Test"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}