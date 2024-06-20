// SplineComponent.jsx

import React from 'react';
import dynamic from 'next/dynamic';
import './SplineComponent.css';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

function SplineComponent() {
  return (
    <main>
      <div className="spline-container">
        <Spline
          scene="https://prod.spline.design/epPF7DKG70hYzACM/scene.splinecode"
          options={{
            enableDragging: true,
            disableScrollZoom: true,
            camera: {
              fov: 60,
              aspect: window.innerWidth / window.innerHeight,
              near: 0.1,
              far: 1000,
            },
          }}
        />
        <div className="overlay-text">
          <h1>Texto en letras blancas isaac</h1>
          <p>Descripción o contenido adicional en blanco</p>
        </div>
      </div>
    </main>
  );
}

export default SplineComponent;

