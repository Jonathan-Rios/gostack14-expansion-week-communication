import React from 'react';

import { Container } from './styles';

const Nav: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Nav;
