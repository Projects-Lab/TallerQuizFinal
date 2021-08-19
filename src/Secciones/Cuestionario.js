import React, { useMemo, useState } from "react";
import preguntas from "../Secciones/preguntas";

const Cuestionario = ({ setResultados }) => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestas, setRespuestas] = useState([]);
  const btnRefs = useMemo(
    () =>
      Array(preguntas.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );


  const manejarClick = (miResp) => {
    const respuestaExiste = respuestas.some((r) => r.id === miResp.id);
    if (respuestaExiste) {
      const indexePregunta = respuestas.findIndex(
        (resp) => resp.id === miResp.id
      );
      const preguntasActualizadas = [...respuestas];
      preguntasActualizadas[indexePregunta].miOpcion = miResp.miOpcion;
      preguntasActualizadas[indexePregunta].acerto =
        preguntasActualizadas[indexePregunta].res.valor ===
        miResp.miOpcion.valor;

      setRespuestas(preguntasActualizadas);
    } else {
      setRespuestas((respuestas) => [...respuestas, miResp]);
    }

    if (btnRefs[preguntaActual]) {
      if (miResp.acerto) {
        btnRefs[preguntaActual].current.style.backgroundColor = "green";
      } else {
        btnRefs[preguntaActual].current.style.backgroundColor = "red";
      }
    }

    const siguiente = preguntaActual + 1;
    if (siguiente < preguntas.length) {
      setPreguntaActual(siguiente);
    }
  };

  const cambiarPregunta = (numero) => {
    setPreguntaActual(numero);
  };

  const terminar = () => {
    setResultados(respuestas);
  };

  const siguientePregun = () => {
    setPreguntaActual((p) => p + 1);
  };

  const anteriorPregun = () => {
    setPreguntaActual((p) => p - 1);
  };

  return (
    
    <>




                <div className="botones-flechas">
                      <button
                        className="flecha"
                        disabled={preguntaActual === 0}
                        onClick={anteriorPregun}
                      >{`⫷`}</button>
                      <button
                        className="finalizar"
                        disabled={respuestas.length !== preguntas.length}
                        onClick={() => terminar()}
                      >
                        Terminar Intento
                      </button>
                      <button
                        className="flecha"
                        disabled={preguntaActual === preguntas.length - 1}
                        onClick={siguientePregun}
                      >{`⫸`}</button>
                    </div>
                <div className="tarjeta tarjeta-pregunta">
                  <div className="question-section">
                    <div>
                      <div className="question-count">
                      </div>
                      <div className="question-text">
                        {preguntas[preguntaActual].pregunta}
                      </div>
                    </div>

                  </div>
                  <div className="answer-section">
                    {preguntas[preguntaActual].opciones.map((miOpcion, i) => (
                      <button
                        key={i}
                        onClick={() =>
                          manejarClick({
                            id: preguntas[preguntaActual].id,
                            pre: preguntas[preguntaActual].pregunta,
                            res: preguntas[preguntaActual].respuesta,
                            miOpcion,
                            acerto:
                              preguntas[preguntaActual].respuesta.valor ===
                              miOpcion.valor,
                          })
                        }
                      >
                        {miOpcion.valor} - {miOpcion.texto}
                      </button>
                    ))}
                  </div>
                  
                </div>
                <div className="tarjeta-numeros-pregunta">
                  {preguntas.map((pregunta, i) => (
                    <button
                      onClick={() => {
                        cambiarPregunta(i);
                      }}
                      ref={btnRefs[i]}
                      key={i}
                      className={"sin-responder"}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

    </>
  );
};

export default Cuestionario;
