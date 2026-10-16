import { useMemo } from 'react';
import './QuizScreen.css';

function QuizScreen({
  question,
  questionNumber,
  totalQuestions,
  score,
  selectedAnswer,
  isAnswered,
  onAnswer,
  onNext,
}) {
  const progress = (questionNumber / totalQuestions) * 100;

  // Determine option state classes
  const getOptionClass = (option) => {
    if (!isAnswered) return 'quiz__option';

    if (option === question.correctAnswer) {
      return 'quiz__option quiz__option--correct';
    }
    if (option === selectedAnswer && option !== question.correctAnswer) {
      return 'quiz__option quiz__option--incorrect';
    }
    return 'quiz__option quiz__option--dimmed';
  };

  const getOptionIcon = (option) => {
    if (!isAnswered) return null;

    if (option === question.correctAnswer) {
      return (
        <svg className="quiz__option-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    }
    if (option === selectedAnswer && option !== question.correctAnswer) {
      return (
        <svg className="quiz__option-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      );
    }
    return null;
  };

  // Unique key per question to trigger re-animations
  const animKey = useMemo(() => question.id + '-' + questionNumber, [question.id, questionNumber]);

  return (
    <div className="quiz" key={animKey}>
      {/* Top bar: progress + score */}
      <div className="quiz__header">
        <div className="quiz__progress-info">
          <span className="quiz__question-counter">
            <span className="quiz__question-counter-current">{questionNumber}</span>
            <span className="quiz__question-counter-sep">/</span>
            <span className="quiz__question-counter-total">{totalQuestions}</span>
          </span>
          <span className="quiz__score-badge">
            <svg className="quiz__score-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            {score}
          </span>
        </div>
        <div className="quiz__progress-bar">
          <div
            className="quiz__progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Image area */}
      <div className="quiz__image-area">
        {question.image ? (
          <img
            src={question.image}
            alt="Instrumento quirúrgico"
            className="quiz__image"
          />
        ) : (
          <div className="quiz__image-placeholder">
            <svg
              className="quiz__image-placeholder-icon"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="8" y="14" width="48" height="36" rx="4" stroke="currentColor" strokeWidth="2" />
              <circle cx="22" cy="28" r="5" stroke="currentColor" strokeWidth="2" />
              <path d="M8 42 L24 30 L36 38 L44 32 L56 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="quiz__image-placeholder-text">
              Imagen del instrumento
            </span>
          </div>
        )}
      </div>

      {/* Question label */}
      <p className="quiz__question-label">¿Qué instrumento es este?</p>

      {/* Options */}
      <div className="quiz__options">
        {question.options.map((option, index) => (
          <button
            key={option}
            className={getOptionClass(option)}
            onClick={() => onAnswer(option)}
            disabled={isAnswered}
            style={{ animationDelay: `${index * 80}ms` }}
            id={`option-${index}`}
          >
            <span className="quiz__option-letter">
              {String.fromCharCode(65 + index)}
            </span>
            <span className="quiz__option-text">{option}</span>
            {getOptionIcon(option)}
          </button>
        ))}
      </div>

      {/* Feedback + Next */}
      {isAnswered && (
        <div className="quiz__feedback-area">
          <div className={`quiz__feedback ${selectedAnswer === question.correctAnswer ? 'quiz__feedback--correct' : 'quiz__feedback--incorrect'}`}>
            {selectedAnswer === question.correctAnswer ? (
              <span>✓ ¡Correcto!</span>
            ) : (
              <span>✗ Incorrecto — la respuesta era <strong>{question.correctAnswer}</strong></span>
            )}
          </div>
          <button className="quiz__next-btn" onClick={onNext} id="next-question-btn">
            {questionNumber < totalQuestions ? (
              <>
                Siguiente
                <svg className="quiz__next-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </>
            ) : (
              <>
                Ver Resultados
                <svg className="quiz__next-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}

export default QuizScreen;
