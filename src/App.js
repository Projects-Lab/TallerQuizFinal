import Cuestionario from "./Secciones/Cuestionario";
import Evaluar from "./Secciones/Evaluar";
import NavBAR from "./Secciones/NavBAR";
import Ingreso from "./Secciones/Ingreso";
import { useState } from "react";


function App() {
  const [usuario, setUsuario] = useState("");
  const [resultados, setResultados] = useState(null);
  return (
    <>
      <NavBAR usuario={usuario} />
      <div className="contenedor">
        {usuario === "" ? (
          <Ingreso setUsuario={setUsuario} />
        ) : resultados ? (
          <Evaluar
            resultados={resultados}
            setUsuario={setUsuario}
            setResultados={setResultados}
          />
        ) : (
          <Cuestionario setResultados={setResultados} />
        )}
      </div>
    </>
  );
}

export default App;
