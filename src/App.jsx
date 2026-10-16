import { useState, useCallback } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';
import quizData from './data/quizData';
import './App.css';

/**
 * Shuffles an array using Fisher-Yates algorithm
 */
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function App() {
  const [screen, setScreen] = useState('welcome'); // 'welcome' | 'quiz' | 'results'
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [answers, setAnswers] = useState([]); // track all answers for review

  const startQuiz = useCallback(() => {
    const shuffled = shuffleArray(quizData).map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    }));
    setQuestions(shuffled);
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setAnswers([]);
    setScreen('quiz');
  }, []);

  const handleAnswer = useCallback(
    (answer) => {
      if (isAnswered) return;
      setSelectedAnswer(answer);
      setIsAnswered(true);

      const isCorrect = answer === questions[currentIndex].correctAnswer;
      if (isCorrect) {
        setScore((prev) => prev + 1);
      }

      setAnswers((prev) => [
        ...prev,
        {
          question: questions[currentIndex],
          selected: answer,
          isCorrect,
        },
      ]);
    },
    [isAnswered, questions, currentIndex]
  );

  const handleNext = useCallback(() => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setScreen('results');
    }
  }, [currentIndex, questions.length]);

  const goHome = useCallback(() => {
    setScreen('welcome');
  }, []);

  return (
    <div className="app">
      {/* Background ambient effects */}
      <div className="app__bg-effects">
        <div className="app__bg-orb app__bg-orb--1" />
        <div className="app__bg-orb app__bg-orb--2" />
        <div className="app__bg-orb app__bg-orb--3" />
      </div>

      <div className="app__content">
        {screen === 'welcome' && <WelcomeScreen onStart={startQuiz} />}

        {screen === 'quiz' && questions.length > 0 && (
          <QuizScreen
            question={questions[currentIndex]}
            questionNumber={currentIndex + 1}
            totalQuestions={questions.length}
            score={score}
            selectedAnswer={selectedAnswer}
            isAnswered={isAnswered}
            onAnswer={handleAnswer}
            onNext={handleNext}
          />
        )}

        {screen === 'results' && (
          <ResultsScreen
            score={score}
            total={questions.length}
            answers={answers}
            onRestart={startQuiz}
            onHome={goHome}
          />
        )}
      </div>
    </div>
  );
}

export default App;
