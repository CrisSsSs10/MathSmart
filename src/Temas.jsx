function Temas() {
  return (
    <div className="explora-container">
      <h1>EXPLORA POR TEMAS</h1>

      <div className="cuadro-temas">
        <div>
          <img src="./ecuaciones.png" />
          <p>Ecuaciones, Variables y operaciones básicas.</p>
        </div>
        <div>
          <img src="./figuras.png" />
          <p>Figuras, Perímetros, áreas y ángulos.</p>
        </div>
        <div>
          <img src="./tips.png" />
          <p>Tips para calcular más rápido</p>
        </div>
        <div>
          <img src="./porcentajes.png" />
          <p>Divide, compara y entiende porcentajes sin miedo</p>
        </div>
      </div>

      <div className="aprende-container">
        <div className="aprende-texto">
          <h2 className="aprende-titulo">¿Qué puedes aprender aquí?</h2>
          <ul>
            <li>Resolver ecuaciones paso a paso</li>
            <li>Entender fracciones y convertir porcentajes</li>
            <li>Calcular áreas y perímetros</li>
            <li>Usar trucos de cálculo mental</li>
            <li>Aplicar reglas de signos</li>
            <li>Prepararte para exámenes</li>
          </ul>
        </div>
        <img className="aprende-imagen" src="./nino.png" alt="niño estudiando" />
      </div>

      {/* TESTIMONIOS DEBAJO */}
      <div className="testimonios-section">
        <h2>Lo que dicen los estudiantes:</h2>
        <div className="testimonios-cards">
          <div className="testimonio">
            <p>“Antes no entendía ni fracciones. Ahora hasta le ayudo a mi hermanito.”</p>
            <strong>👨🏻‍🎓 LUIS YÁNEZ</strong>
            <p>⭐⭐⭐⭐⭐</p>
          </div>
          <div className="testimonio">
            <p>“Explican paso por paso sin aburrir. ¡Me ayudó con el examen!”</p>
            <strong>👩‍🎓 SARA PARRA</strong>
             <p>⭐⭐⭐⭐</p>
          </div>
          <div className="testimonio">
            <p>“Pensé que las mates eran imposibles, pero ya no.”</p>
            <strong>👨🏿‍🎓 MATÍAS SEVILLA</strong>
            <p>⭐⭐⭐⭐⭐</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Temas;