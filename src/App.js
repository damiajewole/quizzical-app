import React from 'react';
import {useState, useEffect} from 'react';
import './style.css';
import Start from './Start';
import Questions from './Questions';
import { nanoid } from 'nanoid'

function App() {
  const [show, setShow] = useState(false)
  const [quizdata, setQuizData] = useState([])

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=11&difficulty=medium&type=multiple")
    .then(res => res.json())
    
    .then(data => setQuizData(data))

  }, [])  

  function renderthis(){
    setShow(true)
  }

  return (
    <div>
      {/* {show ? <Quiz data={quizdata}/> : <Start onClick={renderthis} />} */}
      {show ? 
      <div className="quiz page">
        {quizdata.results.map((data) =>
            <Questions data={data} key ={nanoid()}/>
        )}
        <button className="btn ans">Check answers</button>
      </div>
      : 
      <Start onClick={renderthis} />} 
      
    </div>
  )    
}

export default App;
