import React from 'react';
import { ReactNode } from 'react';

import { Container } from './styles';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <h1>Layout</h1>
      {children}
    </Container>
  );
};

export default Layout;
