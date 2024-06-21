import React from 'react';
import MyNavbar from './components/MyNavbar';
import NasaApodComponent from './components/NasaApodComponent';
import SplineComponent from './components/SplineComponent';
import ScienceComponent from './components/ScienceComponent';
import SpaceMap from './components/SpaceMap'; // Importa SpaceMap aquí
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
        <Route path="/mapa" element={<SpaceMap />} /> {/* Ruta para SpaceMap */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
