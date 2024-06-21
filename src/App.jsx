import React from 'react';
import MyNavbar from './components/MyNavbar';
import NasaApodComponent from './components/NasaApodComponent';
import SplineComponent from './components/SplineComponent';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div id="home">
      <MyNavbar />
      <Routes>
        <Route path="/" element={<SplineComponent />} />
        <Route path="/foto" element={<NasaApodComponent />} />
      </Routes>
    </div>
  );
};

export default App;
