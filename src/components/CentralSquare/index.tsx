import React from 'react';

import { Container, Content } from './styles';

const Main: React.FC = ({ children }) => {
  return (
    <Container>
      <aside>
        <h1 className="start2P">COMUNICAÇÃO</h1>
      </aside>
      <Content>{children}</Content>
    </Container>
  );
};

export default Main;
