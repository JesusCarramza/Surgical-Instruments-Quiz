import { useMemo } from 'react';
import './ResultsScreen.css';

function ResultsScreen({ score, total, answers, onRestart, onHome }) {
  const percentage = Math.round((score / total) * 100);

  const grade = useMemo(() => {
    if (percentage >= 90) return { label: 'Excelente', emoji: '🏆', color: '#06d6a0' };
    if (percentage >= 70) return { label: 'Muy Bien', emoji: '🌟', color: '#ffd166' };
    if (percentage >= 50) return { label: 'Regular', emoji: '📚', color: '#118ab2' };
    return { label: 'Necesitas Practicar', emoji: '💪', color: '#ef476f' };
  }, [percentage]);

  // Generate confetti pieces for celebration
  const confetti = useMemo(() => {
    if (percentage < 70) return [];
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      duration: `${2 + Math.random() * 3}s`,
      color: ['#06d6a0', '#118ab2', '#ffd166', '#ef476f', '#073b4c'][
        Math.floor(Math.random() * 5)
      ],
      size: `${6 + Math.random() * 6}px`,
    }));
  }, [percentage]);

  return (
    <div className="results">
      {/* Confetti */}
      {confetti.length > 0 && (
        <div className="results__confetti" aria-hidden="true">
          {confetti.map((c) => (
            <div
              key={c.id}
              className="results__confetti-piece"
              style={{
                left: c.left,
                animationDelay: c.delay,
                animationDuration: c.duration,
                backgroundColor: c.color,
                width: c.size,
                height: c.size,
              }}
            />
          ))}
        </div>
      )}

      {/* Score circle */}
      <div className="results__score-section">
        <div className="results__emoji">{grade.emoji}</div>
        <div className="results__circle">
          <svg viewBox="0 0 120 120" className="results__circle-svg">
            <circle
              cx="60"
              cy="60"
              r="52"
              className="results__circle-bg"
            />
            <circle
              cx="60"
              cy="60"
              r="52"
              className="results__circle-fill"
              style={{
                strokeDasharray: `${2 * Math.PI * 52}`,
                strokeDashoffset: `${2 * Math.PI * 52 * (1 - percentage / 100)}`,
                stroke: grade.color,
              }}
            />
          </svg>
          <div className="results__circle-text">
            <span className="results__percentage">{percentage}%</span>
          </div>
        </div>
        <h2 className="results__grade" style={{ color: grade.color }}>
          {grade.label}
        </h2>
        <p className="results__score-detail">
          {score} de {total} respuestas correctas
        </p>
      </div>

      {/* Answer review */}
      <div className="results__review">
        <h3 className="results__review-title">Resumen de Respuestas</h3>
        <div className="results__review-list">
          {answers.map((a, i) => (
            <div
              key={i}
              className={`results__review-item ${a.isCorrect ? 'results__review-item--correct' : 'results__review-item--incorrect'}`}
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <div className="results__review-number">{i + 1}</div>
              <div className="results__review-content">
                <span className="results__review-answer">
                  {a.question.correctAnswer}
                </span>
                {!a.isCorrect && (
                  <span className="results__review-selected">
                    Tu respuesta: {a.selected}
                  </span>
                )}
              </div>
              <div className="results__review-icon">
                {a.isCorrect ? '✓' : '✗'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="results__actions">
        <button className="results__restart-btn" onClick={onRestart} id="restart-quiz-btn">
          <svg className="results__btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 4 23 10 17 10" />
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
          </svg>
          Intentar de Nuevo
        </button>
        <button className="results__home-btn" onClick={onHome} id="go-home-btn">
          <svg className="results__btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          Inicio
        </button>
      </div>
    </div>
  );
}

export default ResultsScreen;
