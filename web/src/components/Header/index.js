import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
    const profile = useSelector(state => state.user.profile);
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
                            <strong>{profile.name}</strong>
                            <Link to="/profile">My Profile</Link>
                        </div>
                        <img
                            src={
                                (profile.avatar && profile.avatar.url) ||
                                `https://ui-avatars.com/api/?background=7159c1&color=fff&name=${profile.name}`
                            }
                            alt={profile.name}
                        />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
