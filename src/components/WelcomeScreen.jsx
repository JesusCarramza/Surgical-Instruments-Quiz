import './WelcomeScreen.css';

function WelcomeScreen({ onStart }) {
  return (
    <div className="welcome">
      {/* Decorative surgical cross icon */}
      <div className="welcome__icon">
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="welcome__icon-svg"
        >
          <rect x="24" y="4" width="16" height="56" rx="4" fill="url(#grad)" />
          <rect x="4" y="24" width="56" height="16" rx="4" fill="url(#grad)" />
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="64" y2="64">
              <stop stopColor="#06d6a0" />
              <stop offset="1" stopColor="#118ab2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <h1 className="welcome__title">
        Instrumental
        <span className="welcome__title-accent"> Quirúrgico</span>
      </h1>

      <p className="welcome__subtitle">
        Pon a prueba tus conocimientos identificando instrumentos quirúrgicos.
        27 preguntas te esperan.
      </p>

      <div className="welcome__stats">
        <div className="welcome__stat">
          <span className="welcome__stat-value">27</span>
          <span className="welcome__stat-label">Preguntas</span>
        </div>
        <div className="welcome__stat-divider" />
        <div className="welcome__stat">
          <span className="welcome__stat-value">3</span>
          <span className="welcome__stat-label">Opciones</span>
        </div>
        <div className="welcome__stat-divider" />
        <div className="welcome__stat">
          <span className="welcome__stat-value">∞</span>
          <span className="welcome__stat-label">Intentos</span>
        </div>
      </div>

      <button className="welcome__start-btn" onClick={onStart} id="start-quiz-btn">
        <span className="welcome__start-btn-text">Comenzar Quiz</span>
        <svg
          className="welcome__start-btn-arrow"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export default WelcomeScreen;
