import React, { useCallback } from 'react';
import {useState, useEffect, useRef} from 'react';
import './style.css';
import Start from './Start';
import Questions from './Questions';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

function App(){
  const [show, setShow] = useState(false)
  const [quizdata, setQuizData] = useState([])
  const [click, setClick] = useState(false)
  const [score, setScore] = useState(0);
  const { width, height } = useWindowSize()
  const [game, setGame] = useState(false)

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=11&difficulty=medium&type=multiple")
    .then(res => res.json())
    .then(data => setQuizData(data))
  }, [game])  

  function renderthis(){
    setShow(!show)
  }

  function setRender(){
    setClick(true)
    console.log("new game")
  }

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
    }
  }

  function newGame() {
    setGame(!game)
    setClick(false)
    setScore(0)
  }

  return (
    <div>
      {(score === 5 && click == true) && <Confetti width={width} height={height} />}
      {show ? 
        <div className="quiz page">
          {quizdata.results.map((data) =>
              <Questions data={data} click={click} handleAnswer={handleAnswer} game={game}/>
          )}
          {click ?
            <div className='result'>
              <p className="result--display">You have {score}/5 answers</p>
              <button className="btn ans" onClick={newGame}>New Game</button>
            </div>
            :
            <button className="btn ans" onClick={setRender}>Check answers</button>
          }
        </div>
        : 
        <Start onClick={renderthis} />
      }
    </div>
  )

}
export default App;
