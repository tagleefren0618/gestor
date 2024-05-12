// CourseDetails.js
import React, { useState } from 'react';
import TestList from './TestList';
import Resultados from './ResultadosAlumnos';
import Estrategias from './EstrategiasAlumnos';
import Interpretacion from './Interpretacion';

const CourseDetails = ({ test, onClose }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleViewResults = (option) => {
    setSelectedOption(option);
  };

  // Renderizar Resultado si la opción seleccionada es "Resultados"
  if (selectedOption === "Resultado") {
    return <Resultados onClose={() => handleViewResults(null)} />;
  }

  if (selectedOption === "Interpretación") {
    return <Interpretacion onClose={() => handleViewResults(null)} />;
  }

  if (selectedOption === "Estrategias") {
    return <Estrategias onClose={() => handleViewResults(null)} />;
  }

  return (
    <div className="course-details" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ marginTop: '20px', marginBottom: '20px' }}>{test.title}</h2>
      <div className="details-content mt-4" style={{ display: 'flex', width: '100%' }}>
        <div className="details-left" style={{ flex: '1', marginRight: '20px' }}>
          <img src={test.imageUrl} alt="Test" style={{ maxWidth: '500px', maxHeight: '500px' }} />
        </div>
        <div className="details-right" style={{ flex: '1' }}>
          <TestList items={test.options} onItemClick={handleViewResults} />
        </div>
      </div>
      <button onClick={onClose} style={{ marginTop: '20px' }}>Cerrar</button>
    </div>
  );
};

export default CourseDetails;
