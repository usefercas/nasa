import React from 'react';
import MyNavbar from './components/MyNavbar';
import NasaApodComponent from './components/NasaApodComponent';
import SplineComponent from './components/SplineComponent';
import ScienceComponent from './components/ScienceComponent'; // Asegúrate de que la ruta sea correcta
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div id="home">
      <MyNavbar />
      <Routes>
        <Route path="/" element={
          <>
            <SplineComponent />
            <ScienceComponent />
          </>
        } />
        <Route path="/foto" element={<NasaApodComponent />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
