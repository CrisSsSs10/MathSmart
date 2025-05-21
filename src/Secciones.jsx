import math_symbol from "./assets/math_symbol.png";
import { Link } from "react-router-dom";
import Temas from "./Temas";
function Secciones() {
  return (
    <div className="principal">
      <div className="parte-dos">
        <img src={math_symbol}/>
      </div>
      <div className="parte-uno">
        <h1 className="temaprincipal">Elige lo que quieres aprender</h1>
        <p className="temasecundario">
          En MathSmart organizamos los temas para que aprendas paso a paso lo
          que mas necesites.
          <br />
          Aqui puedes elegir entre Algebra, Geometria, Trucos Matematicos 
          Fracciones.
          <br />
          Haz clic en cualquier seccion y empieza a con videos explicativos,
          ejemplos faciles y consejos utiles.
        </p>
        <div>
          <Link to="/temas">
            <button className="botonprincipal">Ir a las secciones</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Secciones;
