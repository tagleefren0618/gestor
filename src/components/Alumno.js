import React, { useState } from 'react';
import CourseDetails from './CourseDetail';
import Resultados from './ResultadosAlumnos'; // Importa el componente Resultados aquí
import clinicos from "../images/clinicos.jpg";
import psicologicas from "../images/psicologicas.webp";
import historial from "../images/historial.jpg";
import aprendizaje from "../images/aprendizaje.webp";

const AlumnosView = () => {
  const [selectedTest, setSelectedTest] = useState(null);
  const [showTestDetails, setShowTestDetails] = useState(false);
  const [showResultados, setShowResultados] = useState(false); // Estado para controlar si se muestra Resultados

  const tests = [
    { 
      id: 1, 
      title: 'Cuestionarios Clínicos', 
      imageUrl: clinicos,
      options: ['Trastornos alimenticios', 'Salud general', 'Diagnóstico específico de trastorno']
    },
    { 
      id: 2, 
      title: 'Pruebas Psicológicas', 
      imageUrl: psicologicas,
      options: ['Trastorno de Videojuegos', 'Depresión', 'Ansiedad', 'Estrés', 'Burnout', 'Dependencia a la Tecnología']
    },
    { 
      id: 3, 
      title: 'Historia Personal', 
      imageUrl: historial,
      options: ['Calificaciones', 'Comentarios de los docentes', 'Relación con la familia']
    },
    { 
      id: 4, 
      title: 'Pruebas de Estilo de Aprendizaje', 
      imageUrl: aprendizaje,
      options: ['Resultado', 'Interpretación', 'Estrategias']
    },
    // Otros tipos de pruebas...
  ];

  const handleViewTest = (test) => {
    setSelectedTest(test);
    setShowTestDetails(true);
  };

  // Función para mostrar los resultados
  const handleViewResults = () => {
    setShowResultados(true);
  };

  // Función para cerrar los detalles de la prueba
  const handleCloseDetails = () => {
    setShowTestDetails(false);
  };

  return (
    <div className="container mt-4">
      {showTestDetails ? (
        <CourseDetails 
          test={selectedTest} 
          onClose={handleCloseDetails} 
          onViewResults={handleViewResults} // Pasar la función para mostrar los resultados
        />
      ) : showResultados ? ( // Mostrar Resultados si showResultados es true
        <Resultados />
      ) : (
        <div>
          <h2 className="mb-4">Cuestionarios</h2>
          <div className="row">
            {tests.map(test => (
              <div key={test.id} className="col-md-4 mb-4">
                <div className="card">
                  <img src={test.imageUrl} className="card-img-top" alt={test.title} />
                  <div className="card-body">
                    <h5 className="card-title">{test.title}</h5>
                    <button onClick={() => handleViewTest(test)} className="btn btn-primary">Ver detalles</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AlumnosView;
