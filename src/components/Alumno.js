import React, { useState } from 'react';
import CourseDetails from './CourseDetail'; // Asumiendo que tienes un componente para mostrar los detalles de la prueba
import clinicos from "../images/clinicos.jpg";
import psicologicas from "../images/psicologicas.webp";
import historial from "../images/historial.jpg";
import aprendizaje from "../images/aprendizaje.webp";

const AlumnosView = () => {
  const [selectedTest, setSelectedTest] = useState(null);
  const [showTestDetails, setShowTestDetails] = useState(false);

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
      options: ['Interpretación', 'Estrategias']
    },
    // Otros tipos de pruebas...
  ];
  // Datos de diferentes tipos de pruebas
  // const tests = [
  //   { id: 1, title: 'Cuestionarios Clínicos', imageUrl: clinicos },
  //   { id: 2, title: 'Pruebas Psicológicas', imageUrl: psicologicas },
  //   { id: 3, title: 'Historia Personal', imageUrl: historial },
  //   { id: 4, title: 'Pruebas de Estilo de Aprendizaje', imageUrl: aprendizaje },
  // ];

  // Función para manejar el clic en el botón "Ver detalles"
  const handleViewTest = (test) => {
    setSelectedTest(test);
    setShowTestDetails(true);
  };

  return (
    <div className="container mt-4">
      {/* Mostrar CourseDetails si showTestDetails es true */}
      {showTestDetails ? (
        <CourseDetails test={selectedTest} onClose={() => setShowTestDetails(false)} />
      ) : (
        <div>
          <h2 className="mb-4">Cuestionarios</h2>
          <div className="row">
            {/* Mapear la lista de pruebas y mostrar cada una */}
            {tests.map(test => (
              <div key={test.id} className="col-md-4 mb-4">
                <div className="card">
                  <img src={test.imageUrl} className="card-img-top" alt={test.title} />
                  <div className="card-body">
                    <h5 className="card-title">{test.title}</h5>
                    {/* Botón para ver detalles de la prueba */}
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