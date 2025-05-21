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
        <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>
  Álgebra ✏️ | Geometría 📐 | Porcentajes % | Trucos rápidos ⚡
</p>
<hr style={{ width: "85%", height: "3px", backgroundColor: "#f1c40f", border: "none", marginBottom: "20px" }} />
        <p className="temasecundario">
          {" "}
          Una plataforma educativa con explicaciones claras, ejemplos paso a
          paso y videos breves que te ayudaran a entender Algebra, Geometría y
          mas.
        </p>
        <Link to={"/slide-uno"}>
          <button className="botonprincipal">Empezar a aprender</button>
        </Link>
        <div className="emoji-rain">
   <span style={{ "--i": 0 }}>✏️</span>
  <span style={{ "--i": 0.2 }}>📐</span>
  <span style={{ "--i": 0.4 }}>➗</span>
  <span style={{ "--i": 0.6 }}>⚡</span>
  <span style={{ "--i": 0.8 }}>📊</span>
</div>
      </div>
      <div className="parte-dos">
        <img src="./Bienvenida.png"/>
      </div>
    </div>
  );
}

export default App;
