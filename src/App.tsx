import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/layout/Layout';
import Router from './Router';

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Router />
      </Layout>
    </>
  );
}

export default App;
