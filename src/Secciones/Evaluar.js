const Calificacion = ({ resultados, setUsuario, setResultados }) => {
  const puntos = () => {
    const objResol = resultados.filter((r) => r.acerto);
    let aciertos = Object.keys(objResol).length;
    let totalRes = Object.keys(resultados).length;
    let gano = false;
    if ((aciertos * 100) / totalRes > 50) {
      gano = true;
    }
    return { aciertos, cantPreg: totalRes, gano };
  };

  const reiniciar = () => {
    setUsuario("");
    setResultados(null);
  };

  return (
    <div className="resultados">

      <div className="resultado-final">
        <div className={`cuadro cuadro-${puntos().gano ? "bien" : "mal"}`}>
          <p className="cuadro-t1">{`${puntos().aciertos} --- ${
            puntos().cantPreg
          }`}</p>
          <strong className="cuadro-t2">CONTESTADAS CORRECTAMENTE</strong>
        </div>
        <div className={`cuadro cuadro-${puntos().gano ? "bien" : "mal"}`}>
          <p className="cuadro-t1">{puntos().gano }</p>
          <strong className="cuadro-t2">
            {puntos().gano ? "APROBÓ" : "REPROBÓ"}
          </strong>
        </div>
      </div>
      <div className="pie">
        <button onClick={() => reiniciar()}>Reintentar</button>
      </div>
    </div>
  );
};

export default Calificacion;
