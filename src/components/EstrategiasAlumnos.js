import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Estrategias = ({ onClose }) => {
  return (
    <div className="container">
      <h1 style={{ cursor: "pointer", fontSize: "22px" }} onClick={onClose}>
        <ArrowBackIcon /> Atrás
      </h1>
      <h2>Estrategias para Enseñar de Acuerdo al Estilo de Aprendizaje</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Estilo de Aprendizaje</th>
              <th>Herramientas para la Enseñanza</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Activo o Reflexivo</td>
              <td>
                <p>
                  <strong>Activo:</strong>
                </p>
                <ul>
                  <li>
                    Estudia en un grupo cuyos miembros tomen turnos para
                    explicar los temas uno a otros y después lo analizan.
                  </li>
                  <li>Piensa en los usos prácticos del material del curso.</li>
                  <li>
                    Piensa en la forma en que el material se relaciona con tus
                    propias experiencias o si alguna vez has experimentado
                    directamente algo que le aclare cómo funciona la
                    Información.
                  </li>
                </ul>
                <p>
                  <strong>Reflexivo:</strong>
                </p>
                <ul>
                  <li>
                    Mientras lees, detente en forma periódica para pensar en lo
                    que leíste.
                  </li>
                  <li>
                    No solo aprendas de memoria el material; piensa porque es
                    importante y con que se relaciona, tomando en cuenta las
                    causas y los efectos.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Sensorial o Intuitivo</td>
              <td>
                <p>
                  <strong>Sensorial:</strong>
                </p>
                <ul>
                  <li>
                    Pregunta al profesor cómo se aplican en la práctica las
                    ideas y los conceptos.
                  </li>
                  <li>Pide ejemplos específicos de las ideas y conceptos.</li>
                  <li>
                    Realiza una lluvia de ideas de ejemplos y prácticas
                    específicas solo o con tus compañeros de clase.
                  </li>
                  <li>
                    Piensa sobre la forma en que las teorías establecen
                    relaciones con el mundo real.
                  </li>
                </ul>
                <p>
                  <strong>Intuitivo:</strong>
                </p>
                <ul>
                  <li>
                    Si te encuentras en una clase que trata principalmente con
                    información factual, trata de pensar en los conceptos,
                    interpretación o teorías que unen esos hechos.
                  </li>
                  <li>
                    Dedica tiempo a leer las instrucciones y las preguntas
                    completas antes de responder y asegúrate de revisar tu
                    trabajo.
                  </li>
                  <li>
                    Dígase a usted mismo que debe ser más cuidadoso y prestar
                    atención a los detalles escolares.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Visual o Verbal</td>
              <td>
                <p>
                  <strong>Visual:</strong>
                </p>
                <ul>
                  <li>Agrega diagramas a tus notas siempre que sea posible.</li>
                  <li>
                    Anota las fechas en un calendario; las funciones de
                    matemáticas pueden graficarse, escribe los porcentajes en
                    una gráfica de pastel.
                  </li>
                  <li>
                    Organiza tus notas de modo que puedas ver con claridad los
                    puntos principales y los hechos, así como la forma en que se
                    relacionan los conceptos.
                  </li>
                  <li>
                    Une con flecha los hechos relacionados en tus apuntes.
                  </li>
                  <li>
                    Codifica tus apuntes con colores utilizando marcadores, de
                    modo que, todo aquello que se relacione con un tema se
                    encuentre del mismo color.
                  </li>
                </ul>
                <p>
                  <strong>Verbal:</strong>
                </p>
                <ul>
                  <li>
                    Duerme lo suficiente y llega a tiempo de modo que puedas
                    captar todo con mayor eficiencia.
                  </li>
                  <li>Platica sobre lo que aprendiste.</li>
                  <li>
                    Trabaja en grupos de estudio de modo que tengas la
                    oportunidad de explicar y discutir lo que aprendes.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Secuencial o Global</td>
              <td>
                <p>
                  <strong>Secuencial:</strong>
                </p>
                <ul>
                  <li>
                    Si tienes una clase en la que el profesor pasa de un tema a
                    otro u omite algunos pasos, pídele que complete las partes
                    faltantes o que te ayude a relacionar los temas.
                  </li>
                  <li>
                    Cuando estudies los apuntes de una clase en la que el
                    profesor presenta la información de manera aleatoria, no los
                    leas en el orden en que están, tomate tú tiempo para volver
                    a escribir el material de acuerdo con una lógica que te
                    ayude a comprender mejor, aunque esto te tomara tiempo a la
                    larga te ahorrara horas de estudio.
                  </li>
                </ul>
                <p>
                  <strong>Global:</strong>
                </p>
                <ul>
                  <li>
                    Antes de tratar de estudiar un capítulo de un libro, lee
                    todos los subtítulos para tener una idea general de lo que
                    trata el capítulo.
                  </li>
                  <li>
                    Cuando recibas tu primera tarea sobre un tema nuevo, dedica
                    un tiempo extra y revisa todo el capítulo antes de empezar.
                    Este tipo de “lectura preliminar”, te evitara leer una y
                    otra vez la parte que no puedas comprender.
                  </li>
                  <li>
                    En lugar de dedicar poco tiempo a cada materia todas las
                    noches, trata de apartar algunas noches para materias
                    específicas y profundiza en una a la vez, después mantente
                    alejado de esa materia durante un día o dos.
                  </li>
                  <li>
                    Trata de relacionar los temas con otras cosas que ya sabes.
                    Pregúntate cómo puedes aplicar el material y como se
                    relaciona con algo más.
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Estrategias;
