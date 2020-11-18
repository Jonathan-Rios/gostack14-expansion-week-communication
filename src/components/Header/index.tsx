import React from 'react';

import { Container, Content } from './styles';

import logo from '../../assets/logo.svg';

const Main: React.FC = ({ children }) => {
  return (
    <Container>
      <img src={logo} alt="communixpansion" />
      <Content>{children}</Content>
    </Container>
  );
};

export default Main;
