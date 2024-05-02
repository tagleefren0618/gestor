import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const StudentList = ({ selectedGroup, onBackButtonClick }) => {
  const students = selectedGroup?.students || []; // Verifica si selectedGroup es null
  
  return (
    <div>
      <h2>
        <ArrowBackIcon onClick={onBackButtonClick} /> Atrás
      </h2>
      {selectedGroup ? (
        <div>
          <h3>Alumnos - {selectedGroup.name}</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Grupo</th>
                <th>Análisis de Resultados</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.grade}</td>
                  <td>
                    {/* Aquí puedes agregar contenido para análisis de resultados */}
                    {/* Por ejemplo, un botón para ver los resultados */}
                    <button className="btn btn-primary">Ver Resultados</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No hay un grupo seleccionado.</p>
      )}
    </div>
  );
};

export default StudentList;
