import React, { useCallback } from 'react';
import {useState, useEffect, useRef} from 'react';
import './style.css';
import Start from './Start';
import Questions from './Questions';
import { nanoid } from 'nanoid'

function App(){
  const [show, setShow] = useState(false)
  const [quizdata, setQuizData] = useState([])

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=11&difficulty=medium&type=multiple")
    .then(res => res.json())
    .then(data => setQuizData(data))
  }, [])  

  function renderthis(){
    setShow(!show)
  }

<<<<<<< Updated upstream
  function calculateResult(childData){
    console.log("results calculated")
    console.log(childData)
  }
=======
  function setRender(){
    setClick(true)
    // console.log()
  }

  console.log(click, "click")
>>>>>>> Stashed changes

  return (
    <div>
      {show ? 
<<<<<<< Updated upstream
      <div className="quiz page">
        {quizdata.results.map((data) =>
            <Questions data={data} key ={nanoid()} handleCallback={calculateResult}/>
        )}
        <button className="btn ans" >Check answers</button>
      </div>
      : 
      <Start onClick={renderthis} />} 
      
=======
        <div className="quiz page">
          {quizdata.results.map((data) =>
              <Questions data={data} handleClick={click}/>
          )}
          {click ?
            <div className='result'>
              <p className="result--display">You have 'placeholder' answers</p>
              <button className="btn ans" onClick={setRender}>New Game</button>
            </div>
            :
            <button className="btn ans" onClick={setRender}>Check answers</button>
          }
        </div>
        : 
        <Start onClick={renderthis} />
      }
>>>>>>> Stashed changes
    </div>
  )    
}
export default App;
