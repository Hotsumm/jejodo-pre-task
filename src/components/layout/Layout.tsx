import React from 'react';
import styled from 'styled-components';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <Main>{children}</Main>;
}

export default Layout;

const Main = styled.main``;
