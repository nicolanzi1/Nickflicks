import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../nickflicks.png';

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES} src={logo} alt="Nickflicks" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
