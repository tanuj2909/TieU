import React, { useState } from 'react';
import { motion } from 'framer-motion';

import Navbar from './Navbar';

const questions = [
  {
    id: 1,
    question: "What is your primary business model?",
    options: ["B2B", "B2C", "Hybrid (B2B and B2C)", "Non-profit"],
  },
  {
    id: 2,
    question: "How long has your business been operating?",
    options: ["Less than 1 year", "1-3 years", "3-5 years", "More than 5 years"],
  },
  {
    id: 3,
    question: "What is your current annual revenue?",
    options: ["Less than $100,000", "$100,000 - $500,000", "$500,000 - $1 million", "More than $1 million"],
  },
  {
    id: 4,
    question: "How many employees do you have?",
    options: ["1-5", "6-20", "21-50", "More than 50"],
  },
  {
    id: 5,
    question: "What is your primary customer acquisition channel?",
    options: ["Social media", "Referrals", "Paid advertising", "Organic search"],
  },
  {
    id: 6,
    question: "How would you rate your current digital presence?",
    options: ["Non-existent", "Basic", "Moderate", "Strong"],
  },
  {
    id: 7,
    question: "What is your biggest business challenge right now?",
    options: ["Cash flow", "Customer acquisition", "Scaling operations", "Product development"],
  },
];

const EvaluateYourself = () => {
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (option) => {
    setAnswers({ ...answers, [currentQuestion]: option });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setQuizCompleted(false);
  };

  const renderQuestion = () => {
    const question = questions[currentQuestion];
    return (
      <motion.div
        key={question.id}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{question.question}</h2>
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="w-full text-left p-4 rounded-lg bg-gray-100 hover:bg-indigo-100 transition duration-300 text-gray-800 font-medium"
            >
              {option}
            </button>
          ))}
        </div>
      </motion.div>
    );
  };

  const renderResults = () => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Quiz Completed!</h2>
        <div className="space-y-4">
          {questions.map((question, index) => (
            <div key={index} className="border-b pb-4">
              <p className="font-semibold text-gray-700">{question.question}</p>
              <p className="text-indigo-600">{answers[index]}</p>
            </div>
          ))}
        </div>
        <button
          onClick={resetQuiz}
          className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Retake Quiz
        </button>
      </motion.div>
    );
  };

  return (
    <>

      <Navbar />
  
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex flex-col items-center justify-center p-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-indigo-800 mb-8 text-center"
      >
        Business Evaluation Quiz
      </motion.h1>
      {!quizCompleted && (
        <div className="mb-4 text-gray-600">
          Question {currentQuestion + 1} of {questions.length}
        </div>
      )}
      {quizCompleted ? renderResults() : renderQuestion()}
    </div>

    </>
  );
};

export default EvaluateYourself;