import React from 'react';
import './ScienceComponent.css';

const ScienceComponent = () => {
  return (
    <div className="science-container">
      <div className="text-container">
        <h1>Ciencia de la NASA</h1>
        <h2>Para todos</h2>
        <p>
          La ciencia es la clave para descubrir los secretos del universo: uniendo a la humanidad con cada descubrimiento,
          expandiendo nuestro conocimiento y despertando nuestra imaginación. Al navegar por las arenas del tiempo y el
          espacio, la ciencia da contexto y significado a mediciones grandes y pequeñas. ¿Sabías que existen tantas estrellas
          en el universo como hay granos de arena en la Tierra? La nueva era de los descubrimientos científicos de la NASA
          acaba de comenzar, ¡y tú eres parte de ella!
        </p>
      </div>
      <div className="image-container">
        <img src="/marte.png" alt="NASA Science" />
      </div>
    </div>
  );
};

export default ScienceComponent;
