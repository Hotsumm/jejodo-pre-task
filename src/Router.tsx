import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Board from './pages/Board';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
