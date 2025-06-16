import React from 'react';
import LandingPage from './page/Home/LandingPage';
import { HashRouter, Route, Routes } from 'react-router-dom';
import FloorPage from './page/FloorPage/FloorPage';
import Apartments from './page/Apartments/Apartments';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:tower" element={<FloorPage />} />
        <Route path="/:tower/:floor" element={<Apartments/>} />
      </Routes>
    </HashRouter>
  );
};

export default App;
