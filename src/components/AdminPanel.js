import React, { useState } from "react";
import AdminNavigation from "./AdminNavigation";
import GroupsList from "./GroupsList";
import StudentList from "./StudentList";
import GroupInfo from "./groupInfo";
import Aprendizaje from "./../images/aprendizaje.webp";
import ResultadosMaestro from "./ResultadosMaestro";
import EstrategiasMaestros from "./EstrategiasMaestros"; 
import groupsData from "./DummyInfo.json";
import InterpretacionMaestro from "./InterpretacionMaestro";

const AdminPanel = () => {
  const groups = groupsData.groups;
  const [selectedOption, setSelectedOption] = useState("grupo");
  const [selectedGroup, setSelectedGroup] = useState(groups[0] || null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showStudentList, setShowStudentList] = useState(false);
  const [showResultados, setShowResultados] = useState(false);
  const [showInterpretacion, setShowInterpretacion] = useState(false);
  const [showEstrategias, setShowEstrategias] = useState(false); // Nuevo estado para mostrar EstrategiasMaestros

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setSelectedGroup(null);
    setSelectedStudent(null);
    setShowStudentList(false);
    setShowInterpretacion(option === "interpretacion");
    setShowResultados(option === "resultados");
    setShowEstrategias(option === "estrategias"); // Mostrar EstrategiasMaestros si se selecciona "estrategias"
  };

  const handleViewGroupData = (group) => {
    setSelectedOption("datos_grupo");
    setSelectedGroup(group);
    setSelectedStudent(null);
    setShowStudentList(false);
  };

  const handleViewStudentDetails = (student) => {
    setSelectedStudent(student);
  };

  const handleViewGroupStudents = (group) => {
    setShowStudentList(true);
    setSelectedGroup(group);
    setSelectedStudent(null);
  };

  const handleClearSelectedGroup = () => {
    setSelectedGroup(null);
    setSelectedStudent(null);
    setShowStudentList(false);
  };

  const handleBackButtonClick = () => {
    setSelectedOption("grupo");
    setSelectedGroup(null);
    setShowInterpretacion(false);
    setShowEstrategias(false); // Aseguramos que se oculte EstrategiasMaestros cuando se regresa a "grupo"
  };

  return (
    <div className="container">
      <div className="row">
        <AdminNavigation
          selectedOption={selectedOption}
          onSelectOption={handleSelectOption}
        />
        <div className="col-md-9 mt-4" style={{ marginLeft: "20rem" }}>
          {selectedOption === "grupo" && !showStudentList && (
            <GroupsList
              groups={groups}
              onViewGroupData={handleViewGroupData}
              onViewGroupStudents={handleViewGroupStudents}
            />
          )}

          {selectedOption === "grupo" && showStudentList && (
            <StudentList
              selectedGroup={selectedGroup}
              onBackButtonClick={handleClearSelectedGroup}
            />
          )}

          {showResultados && <ResultadosMaestro onClose={() => handleSelectOption('pruebas')} />}
          
          {showInterpretacion && <InterpretacionMaestro onClose={() => handleSelectOption('pruebas')}/>}

          {showEstrategias && <EstrategiasMaestros onClose={() => handleSelectOption('pruebas')}/>} {/* Mostrar EstrategiasMaestros si showEstrategias es verdadero */}

          {selectedOption === "pruebas" && !showResultados && (
            <div className="card">
              <div
                className="card-body"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div style={{ flex: 1, marginRight: "30px" }}>
                  <img
                    src={Aprendizaje}
                    alt="Descripción de la imagen"
                    style={{ maxWidth: "500px", maxHeight: "500px" }}
                  />
                </div>

                <div className="details-right" style={{ flex: 1 }}>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    <li style={{ marginBottom: "10px" }}>
                      <span
                        style={{ color: "blue", cursor: "pointer" }}
                        onClick={() => handleSelectOption("resultados")}
                      >
                        Resultados
                      </span>
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      <span
                        style={{ color: "blue", cursor: "pointer" }}
                        onClick={() => handleSelectOption("estrategias")}
                      >
                        Estrategias
                      </span>
                    </li>
                    <li>
                      <span
                        style={{ color: "blue", cursor: "pointer" }}
                        onClick={() => handleSelectOption("interpretacion")}
                      >
                        Interpretación
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {selectedOption === "datos_grupo" && (
            <GroupInfo onBackButtonClick={handleBackButtonClick} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
