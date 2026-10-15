import './App.css'

function App() {
  return (
    <main className="infographic">
      <header className="masthead">
        <a className="wordmark" href="#inicio" aria-label="Inicio: Seguridad en claro">
          <span className="wordmark-mark">S</span>
          <span>SEGURIDAD EN CLARO</span>
        </a>
        <span className="issue">GUÍA VISUAL <span>·</span> 01</span>
      </header>

      <section className="intro" id="inicio" aria-labelledby="page-title">
        <div className="intro-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> LO ESENCIAL, SIN TECNICISMOS</p>
          <h1 id="page-title">Tu información.<br /><em>Bien cuidada.</em></h1>
          <p className="intro-text">
            La triada CID reúne tres cosas que toda información necesita:
            que sea privada, que sea correcta y que esté disponible cuando la necesites.
          </p>
        </div>

        <div className="intro-art" aria-label="Tres principios protegen una misma información" role="img">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit-core">
            <svg viewBox="0 0 64 64" aria-hidden="true">
              <path d="M17 8h20l12 12v36H17z" />
              <path d="M37 8v13h12M25 34h16M25 42h16" />
              <path d="m25 25 3 3 6-7" />
            </svg>
          </div>
          <span className="orbit-label label-c">C</span>
          <span className="orbit-label label-i">I</span>
          <span className="orbit-label label-d">D</span>
          <span className="art-caption">UNA MISMA INFORMACIÓN<br />TRES FORMAS DE PROTEGERLA</span>
        </div>

        <div className="intro-stamp"><span>LA BASE DE</span><strong>LA CONFIANZA<br />DIGITAL</strong></div>
      </section>

      <section className="analogy" aria-labelledby="analogy-title">
        <div className="analogy-label">
          <span className="section-index">01 / UNA IDEA SIMPLE</span>
          <h2 id="analogy-title">Imagina un<br />documento importante.</h2>
        </div>
        <div className="analogy-items">
          <p><span className="analogy-symbol symbol-lock">01</span><span><strong>Lo guardas bajo llave.</strong><br />No cualquiera puede leerlo.</span></p>
          <p><span className="analogy-symbol symbol-check">02</span><span><strong>Evitas que lo alteren.</strong><br />Su contenido sigue siendo fiable.</span></p>
          <p><span className="analogy-symbol symbol-clock">03</span><span><strong>Lo encuentras cuando hace falta.</strong><br />Puedes usarlo a tiempo.</span></p>
        </div>
      </section>

      <section className="pillars" aria-labelledby="pillars-title">
        <div className="section-heading">
          <div>
            <span className="section-index">02 / LAS TRES PIEZAS</span>
            <h2 id="pillars-title">CID, letra por letra</h2>
          </div>
          <p>Si una falla, la información deja de estar bien protegida.</p>
        </div>

        <div className="pillar-grid">
          <article className="pillar pillar-confidentiality">
            <div className="pillar-top"><span className="pillar-letter">C</span><span className="pillar-number">01</span></div>
            <div className="pillar-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48"><rect x="9" y="21" width="30" height="21" rx="3" /><path d="M15 21v-7a9 9 0 0 1 18 0v7M24 29v5" /></svg>
            </div>
            <h3>Confidencialidad</h3>
            <p className="pillar-question">¿Quién puede verla?</p>
            <p className="pillar-definition">Solo acceden las personas autorizadas. Tus datos personales no deberían quedar a la vista de cualquiera.</p>
            <div className="example"><span className="example-tag">EN LA VIDA REAL</span><p>Compartes un álbum familiar solo con las personas elegidas, no con todo internet.</p></div>
            <p className="action"><strong>Ayuda:</strong> usa contraseñas únicas y activa la verificación en dos pasos.</p>
          </article>

          <article className="pillar pillar-integrity">
            <div className="pillar-top"><span className="pillar-letter">I</span><span className="pillar-number">02</span></div>
            <div className="pillar-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48"><path d="M24 5 40 11v12c0 10-7 16-16 20C15 39 8 33 8 23V11z" /><path d="m16 24 5 5 11-12" /></svg>
            </div>
            <h3>Integridad</h3>
            <p className="pillar-question">¿Sigue siendo correcta?</p>
            <p className="pillar-definition">La información se mantiene completa y sin cambios no autorizados. Así puedes confiar en lo que estás leyendo.</p>
            <div className="example"><span className="example-tag">EN LA VIDA REAL</span><p>El monto de una transferencia llega tal como lo escribiste, sin que nadie lo cambie.</p></div>
            <p className="action"><strong>Ayuda:</strong> limita quién puede editar y conserva copias de respaldo.</p>
          </article>

          <article className="pillar pillar-availability">
            <div className="pillar-top"><span className="pillar-letter">D</span><span className="pillar-number">03</span></div>
            <div className="pillar-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48"><circle cx="24" cy="25" r="17" /><path d="M24 15v11l8 5M18 5h12" /></svg>
            </div>
            <h3>Disponibilidad</h3>
            <p className="pillar-question">¿Puedo usarla cuando la necesito?</p>
            <p className="pillar-definition">Los sistemas y datos están accesibles a tiempo para quienes tienen permiso de usarlos.</p>
            <div className="example"><span className="example-tag">EN LA VIDA REAL</span><p>Puedes abrir tu ficha médica durante una consulta, incluso si tu teléfono se rompe.</p></div>
            <p className="action"><strong>Ayuda:</strong> haz respaldos y mantén tus dispositivos actualizados.</p>
          </article>
        </div>
      </section>

      <section className="takeaway" aria-label="Resumen de la triada CID">
        <span className="takeaway-mark">CID</span>
        <p><strong>Privada. Correcta. Disponible.</strong><br />Así se ve una información bien protegida.</p>
        <span className="takeaway-spark" aria-hidden="true">✳</span>
      </section>

      <footer className="footer">
        <span>SEGURIDAD DIGITAL PARA TODAS LAS PERSONAS</span>
        <span>CONFIDENCIALIDAD <b>·</b> INTEGRIDAD <b>·</b> DISPONIBILIDAD</span>
      </footer>
    </main>
  )
}

export default App
