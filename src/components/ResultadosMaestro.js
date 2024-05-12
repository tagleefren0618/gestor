// Resultado.js
import React from "react";
import turnos from "../images/turnos.png";
import activos from "../images/activos.png";
import intuitivos from "../images/intuitivos.png";
import visuales from "../images/visuales.png";
import secuenciales from "../images/secuenciales.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ResultadosMaestro = ({ onClose }) => {
  return (
    <div>
      <div>
        <h1 style={{ cursor: "pointer", fontSize: "22px" }} onClick={onClose}>
          <ArrowBackIcon /> Atrás
        </h1>
      </div>
      <div
        style={{ textAlign: "center" }}
      >
        <h2>Resultados del Maestro</h2>
        <div>
          <img src={turnos} alt="Imagen 1" style={{ maxWidth: "100%", marginBottom: "10px" }} />
          <img src={activos} alt="Imagen 2" style={{ maxWidth: "100%", marginBottom: "10px" }} />
          <img
            src={intuitivos}
            alt="Imagen 3"
            style={{ maxWidth: "100%", marginBottom: "10px" }}
          />
          <img src={visuales} alt="Imagen 4" style={{ maxWidth: "100%", marginBottom: "10px" }} />
          <img src={secuenciales} alt="Imagen 5" />
        </div>
      </div>
    </div>
  );
};

export default ResultadosMaestro;
