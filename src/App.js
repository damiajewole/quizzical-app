// import logo from './logo.svg';
import React from 'react';
import {useState, useEffect} from 'react';
import './style.css';
import Start from './Start';
import Quiz from './Quiz';

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
      {show ? <Quiz data={quizdata}/> : <Start onClick={renderthis} />}
    </div>
  )

}

export default App;


// return(
//   <div className="quiz page">
//       {quiz.map (quiz => 
//           <div>
//               <h1 className="question">{quiz.questions}</h1> 
//               <div className="answer">
//                   <p className="answer--value">{quiz.answers[0]}</p>
//                   <p className="answer--value">{quiz.answers[1]}</p>
//                   <p className="answer--value">{quiz.answers[2]}</p>
//                   {/* <p className="answer--value">me</p> */}
//               </div>
//               <hr></hr>
//           </div>
//       )}

//   </div>
// )