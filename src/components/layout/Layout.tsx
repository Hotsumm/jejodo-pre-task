import React from 'react';
import styled from 'styled-components';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Main>{children}</Main>;
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Main = styled.main`
  width: 100%;
  max-width: 2560px;
  display: flex;
  justify-content: center;
`;
