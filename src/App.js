import React, { useState, useEffect } from "react";
import "./style.css";
import Start from "./Start";
import Questions from "./Questions";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

function App() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [quizdata, setQuizData] = useState([]);
  const [click, setClick] = useState(false);
  const [score, setScore] = useState(0);
  const { width, height } = useWindowSize();
  const [game, setGame] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=11&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => setQuizData(data));
  }, [game]);

  function renderthis() {
    setShow(!show);
  }

  function setRender() {
    setClick(true);
    handleShowModal();
    handleMessage();
    console.log("new game");
  }

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
    }
  }

  function newGame() {
    setGame(!game);
    setClick(false);
    setScore(0);
  }

  function handleMessage() {
    if (score === 0) {
      setMessage("Oh no, better luck next time😫");
    } else if (1 < score < 2) {
      setMessage("You can do better👍");
    } else if (score===3 || score === 4) {
      setMessage("Excellent work, comrade🫡");
    } else {
      setMessage("Congratulations, you're a winner🎉🎉🎉")
    }
    return message;
  }

  return (
    <div>
      {score === 5 && click === true && (
        <Confetti width={width} height={height} />
      )}
      {show ? (
        <div className="quiz page">
          {quizdata.results.map((data, i) => (
            <Questions
              data={data}
              key={i}
              click={click}
              handleAnswer={handleAnswer}
              game={game}
            />
          ))}
          {click ? (
            <div className="result">
              {showModal && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                  <div className="modal-container" onClick={handleModalClick}>
                    <button className="modal-close" onClick={handleCloseModal}>
                      &times;
                    </button>
                    <div className="modal-content">
                      <p className="result--display">
                        You have {score}/5 answers
                      </p>
                      <p className="result-prompt">{message}</p>
                      <div className="modal-btn">
                        <button className="btn ans" onClick={newGame}>
                          Try Again
                        </button>
                        <button className="btn ans" onClick={handleCloseModal}>
                          See Correction
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <button className="btn ans" onClick={newGame}>
                New Game
              </button>
            </div>
          ) : (
            <button className="btn ans" onClick={setRender}>
              Check answers
            </button>
          )}
        </div>
      ) : (
        <Start onClick={renderthis} />
      )}
    </div>
  );
}
export default App;
