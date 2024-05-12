import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const EstrategiasMaestros = ({ onClose }) => {
  return (
    
    <div>
        <h1 style={{ cursor: "pointer", fontSize: '22px' }} onClick={onClose}>
        <ArrowBackIcon /> Atrás
      </h1>
      <h2>Estrategias para Maestros</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Estilo de aprendizaje</th>
            <th>Porcentaje</th>
            <th>Estrategias en el aula</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Activos</td>
            <td>71%</td>
            <td>
              <ul>
                <li>Ilustraciones</li>
                <li>Analogías</li>
                <li>Pistas tipográficas y discursivas</li>
                <li>Redes semánticas</li>
                <li>Construcción de modelos físicos</li>
                <li>Maquetas/collage</li>
                <li>Experimentos prácticos</li>
                <li>Juegos</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Reflexivos</td>
            <td>29%</td>
            <td>
              <ul>
                <li>Preguntas intercaladas</li>
                <li>Estructuras textuales</li>
                <li>Información estructurada: objetivos, resumen</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Sensoriales</td>
            <td>37%</td>
            <td>
              <ul>
                <li>Preguntas intercaladas</li>
                <li>Mapas conceptuales</li>
                <li>Redes semánticas</li>
                <li>Resumen</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Intuitivos</td>
            <td>63%</td>
            <td>
              <ul>
                <li>Analogías</li>
                <li>Ilustraciones</li>
                <li>Pistas tipográficas y discursivas</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Visuales</td>
            <td>90%</td>
            <td>
              <ul>
                <li>Recursos multimedia</li>
                <li>Ilustraciones</li>
                <li>Preguntas intercaladas</li>
                <li>Pistas tipográficas y discursivas</li>
                <li>Mapas conceptuales</li>
                <li>Mapas mentales</li>
                <li>Redes semánticas</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Verbales</td>
            <td>10%</td>
            <td>
              <ul>
                <li>Analogías</li>
                <li>Exposiciones</li>
                <li>Debates</li>
                <li>Mesas redondas</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Secuenciales</td>
            <td>72%</td>
            <td>
              <ul>
                <li>Organizadores previos</li>
                <li>Ilustraciones</li>
                <li>Analogías</li>
                <li>Mapas conceptuales</li>
                <li>Redes semánticas</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Globales</td>
            <td>28%</td>
            <td>
              <ul>
                <li>Ilustraciones</li>
                <li>Analogías</li>
                <li>Pistas tipográficas</li>
                <li>Mapas conceptuales</li>
                <li>Redes semánticas</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EstrategiasMaestros;
