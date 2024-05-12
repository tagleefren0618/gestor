// Resultado.js
import React from "react";
import Resultados from "../images/resultados.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Resultado = ({ onClose }) => {
  return (
    <div className="container">
      <h1 style={{ cursor: "pointer", fontSize: '22px' }} onClick={onClose}>
        <ArrowBackIcon /> Atrás
      </h1>
      <div className="row mt-5">
        <div className="col-md-6">
          <img
            src={Resultados}
            alt="Imagen de resultado"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h2>Resultados</h2>
          <p>
            1.- Escriba el número en los espacios apropiados de la tabla que se
            muestra a continuación (por ejemplo, si la respuesta a la pregunta 3
            fue a, escriba un 1 en la columna a de la pregunta 3).
          </p>
          <p>
            2.- Sume las columnas y escriba el total en los espacios indicados.
          </p>
          <p>
            3.- Para cada una de las cuatro escalas, resta el total más bajo del
            más alto. En la línea inferior, escribe la diferencia (1 a 7) y la
            letra (a o b) para la que el total fue más alto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resultado;
