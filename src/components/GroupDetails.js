import React from "react";

const GroupDetails = ({
  group,
  students,
  selectedStudent,
  onViewStudentDetails,
}) => {
  return (
    <div className="card">
      <div className="card-header bg-primary text-white">
        Alumnos del Grupo: {group.name}
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Grado</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.grade}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => onViewStudentDetails(student)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Mostrar detalles del estudiante seleccionado */}
      {selectedStudent && (
        <div className="card">
          <div className="card-header bg-primary text-white">
            Detalles del Estudiante: {selectedStudent.name}
          </div>
          <div className="card-body">
            {/* Aquí puedes mostrar más detalles del estudiante */}
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupDetails;