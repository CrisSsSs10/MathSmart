import math_symbol from "./assets/math_symbol.png";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="principal">
      <div className="parte-uno">
        {" "}
        <h1 className="temaprincipal">
          MathSmart aprende matematicas desde cero
        </h1>
        <p className="temasecundario">
          {" "}
          Una plataforma educativa con explicaciones claras, ejemplos paso a
          paso y videos breves que te ayudaran a entender Algebra, Geometría y
          mas.
        </p>
        <Link to={"/slide-uno"}>
          <button className="botonprincipal">Empezar a aprender</button>
        </Link>
      </div>
      <div className="parte-dos">
        <img src={math_symbol} />
      </div>
    </div>
  );
}

export default App;
