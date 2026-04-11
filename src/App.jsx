import React, { useState } from 'react';

const App = () => {
  const [view, setView] = useState('home');
  const [measurements, setMeasurements] = useState({
    height: '',
    weight: ''
  });

  const [ageGroup, setAgeGroup] = useState('adult');

  const handleMeasurementChange = (event) => {
    const { name, value } = event.target;

    setMeasurements({
      ...measurements,
      [name]: value
    });
  };

  const handleAgeGroupChange = (event) => {
    setAgeGroup(event.target.value);
  };

  return (
    <div>
      <h1>Camille Fashion</h1>

      <button onClick={() => setView('home')}>Inicio</button>
      <button onClick={() => setView('catalog')}>Catálogo</button>
      <button onClick={() => setView('contact')}>Contacto</button>

      <h2>Vista seleccionada: {view}</h2>

      <input
        type="text"
        name="height"
        value={measurements.height}
        onChange={handleMeasurementChange}
        placeholder="Altura"
      />

      <input
        type="text"
        name="weight"
        value={measurements.weight}
        onChange={handleMeasurementChange}
        placeholder="Peso"
      />

      <select
        value={ageGroup}
        onChange={handleAgeGroupChange}
      >
        <option value="adult">Adulto</option>
        <option value="baby">Bebé</option>
      </select>
    </div>
  );
};

export default App;
