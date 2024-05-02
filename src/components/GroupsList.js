import React from "react";

const GroupsList = ({ groups, onViewGroupData, onViewGroupStudents }) => {
  return (
    <div className="card">
      <div className="card-header bg-primary text-white">Grupos de Escuela</div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Grupo</th>
              <th>Alumnos</th>
              <th>Datos del Grupo</th>
              <th>Ver Alumnos</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => (
              <tr key={group.id}>
                <td>{group.name}</td>
                <td>{group.students.length}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => onViewGroupData(group)}
                  >
                    Ver datos del grupo
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => onViewGroupStudents(group)}
                  >
                    Ver Alumnos
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GroupsList;

