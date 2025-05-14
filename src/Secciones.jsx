import { Link } from "react-router-dom";
import Temas from "./Temas";
function Secciones() {
  return (
    <div className="principal">
      <div className="parte-dos">
        <img src="./assets/math_symbol.png" alt="" />
      </div>
      <div className="parte-uno">
        <h1>Elige lo que quieres aprender</h1>
        <p>
          En MathSmart organizamos los temas para que aprendas paso a paso lo
          que mas necesites.
          <br />
          Aqui puedes elegir entre Algebra, Geometria, Trucos Matematicos o
          Fracciones.
          <br />
          Haz clic en cualquier seccion y empieza a con videos explicativos,
          ejemplos faciles y consejos utiles.
        </p>
        <div>
          <button className="botonprincipal">Ir a las secciones</button>
        </div>
      </div>
    </div>
  );
}
export default Secciones;
