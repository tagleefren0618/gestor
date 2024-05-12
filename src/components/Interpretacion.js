import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Interpretacion = ({ onClose }) => {

  return (
    <div className="container">
    <h1 style={{ cursor: "pointer", fontSize: '22px' }} onClick={onClose}>
        <ArrowBackIcon /> Atrás
      </h1>
      <h2>Interpretación del Estilo de Aprendizaje</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Estilos de Aprendizaje</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Activo o Reflexivo</td>
            <td>
              <p><strong>Activo:</strong> Los aprendices activos retienen y comprenden mejor la información después de realizar algo en el mundo exterior (fuera de su cerebro) con la información. Les agrada aplicar la información al mundo real, experimentarla en acciones propias o analizar o explicar a otras personas lo que han aprendido.</p>
              <p><strong>Reflexivo:</strong> Los aprendices reflexivos retienen y comprenden mejor la información después de que se toman un tiempo para pensar en ésta.</p>
            </td>
          </tr>
          <tr>
            <td>Sensorial o Intuitivo</td>
            <td>
              <p><strong>Sensorial:</strong> Los aprendices sensoriales prefieren los hechos y datos específicos y concretos, así como la experimentación detallada. Se inclinan por resolver problemas con métodos estándar y son pacientes con los detalles.</p>
              <p><strong>Intuitivo:</strong> Los aprendices intuitivos prefieren la innovación y las teorías. Son hábiles para captar conceptos nuevos e ideas amplias. Consideran desagradable la repetición y el aprendizaje con base en hechos, se sienten cómodos con los símbolos y las abstracciones relacionándolos con frecuencia con conocimientos y experiencias previas.</p>
            </td>
          </tr>
          <tr>
            <td>Visual o Verbal</td>
            <td>
              <p><strong>Visual:</strong> Los aprendices visuales recuerdan mejor lo que ven, imágenes, esquemas, diagramas de flujo, calendarios, películas y demostraciones. Tienden a olvidar las palabras e ideas que sólo se hablan. Por lo general, las clases no incluyen mucha información visual.</p>
              <p><strong>Verbal:</strong> Los aprendices verbales recuerdan gran parte de lo que escuchan y más de lo que escuchan y repiten. Se benefician con la discusión y el análisis, prefieren la explicación verbal a la demostración visual y aprenden con efectividad al explicar los conceptos a otras personas.</p>
            </td>
          </tr>
          <tr>
            <td>Secuencial o Global</td>
            <td>
              <p><strong>Secuencial:</strong> Los aprendices secuenciales es más fácil aprender el material que presenta una progresión lógica y ordenada. Solucionan los problemas de manera lineal y paso a paso. Pueden trabajar con secciones de material sin comprender todavía el concepto completo, tienden a ser más fuertes cuando observan las partes de un todo en lugar de comprender el todo de dividirlo en partes.</p>
              <p><strong>Global:</strong> Los aprendices globales aprenden en forma general. Quizás se sientan perdidos durante días y semanas, incapaces de resolver los problemas más sencillos o de demostrar la comprensión más rudimentaria, hasta que de repente “captan la idea”.</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Interpretacion;
