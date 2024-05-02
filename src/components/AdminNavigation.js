import React from "react";

const AdminNavigation = ({ selectedOption, onSelectOption }) => {
  return (
    <div className="col-md-3 bg-light" style={{ height: "100vh", position: "fixed", left: 0 }}>
      <ul className="nav flex-column mt-4">
        <li className="nav-item mt-2">
          <a
            className={`nav-link ${selectedOption === "grupo" ? "active" : ""}`}
            onClick={() => onSelectOption("grupo")}
            href="#"
          >
            Grupos
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${selectedOption === "pruebas" ? "active" : ""}`}
            onClick={() => onSelectOption("pruebas")}
            href="#"
          >
            Pruebas
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AdminNavigation;
