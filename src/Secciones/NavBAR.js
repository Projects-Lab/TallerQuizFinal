const Navegacion = ({ usuario }) => {
  return (
    <ul className="Navbar">
      <li className="titulote">CAPITALES DEL MUNDO</li>
      {usuario && <li className="usuario-nombre">{usuario}</li>}
    </ul>
  );
};

export default Navegacion;
