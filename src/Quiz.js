import React from 'react';
import './style.css';
import { useState, useMemo } from 'react';
import Questions from './Questions';

export default function Quiz(props){ 
    // let props = props.data.results

    // console.log(props)
    // const quizQuestion = []
    // for(let i = 0; i < 5; i++){
    //     quizQuestion.push(props.data.results[i].question)
    // }

    // function randomUniqueNum() {
    //     let answers = []
    //     for(let i = 0; i < 5; i++){
    //         let arr = []
    //         arr.push(props.data.results[i].correct_answer)
    //         for(let j= 0; j < 3; j++){
    //             arr.push(props.data.results[i].incorrect_answers[j])
    //         }
    //         answers[i] = arr;
    //     }

    //     let result = [];
    //     for(let i = 0; i <= 4; i++){
    //         const placebo = answers[i]
    //         for(let i = 0; i <=3; i++){
    //             const random = Math.floor(Math.random() * (3 - i));
    //             result.push(placebo[random]);
    //             placebo[random] = placebo[3 - i];

    //         }
    //     }

    //     return result
    // }

    // const quizAnswers = randomUniqueNum()

    //testing ... 1, 2, 3
    // const quizContent = [{
    //     question: quizQuestion,
    //     answers: quizAnswers
    // }]

    // console.log(quizContent)

    // const questions = quizContent[0].question
    // let answers = quizContent[0].answers

    // function sliceIntoChunks(arr, chunkSize) {
    //     const res = [];
    //     for (let i = 0; i < arr.length; i += chunkSize) {
    //         const chunk = arr.slice(i, i + chunkSize);
    //         res.push(chunk);
    //     }
    //     return res;
    // }
    
    // answers = (sliceIntoChunks(answers, 4));

    //for when the div is clicked, to change colour.









    // const [select, setSelect] = React.useState(false)
    // const [options, setOptions] = useState([
    //     props.correctAnswer,
    //     ...props.incorrectAnswers,
    // ]);

    // function doThis(){
    //     setSelect(true)
    //     console.log("clicked")
    // }

    // useMemo(() => {
    //     setOptions(shuffle(options));
    // }, [options]);



    console.log(props.data)
    // console.log(props.data.results[0].incorrect_answers)



    return(
        <div className="q">
            {/* < Questions /> */}









            {/* <h1 className="question">{questions[0].replace(/&quot;/g, '"')}</h1>
            <div className="answer" onClick={() => doThis()}>
            {console.log(select)}
                {answers[0].map((answer) =>
                    // {console.log(select)}
                    // {select ? <p className="answer--value yes">{answer.replace(/&quot;/g, '"')}</p> : <p className="answer--value">{answer.replace(/&quot;/g, '"')}</p>}
                    // <p className="answer--value">{answer.replace(/&quot;/g, '"')}</p>
                    <p className={select ? "answer--value yes": "answer--value"}>{answer.replace(/&quot;/g, '"')}</p>
                )}
            </div> 

            <h1 className="question">{questions[1].replace(/&quot;/g, '"')}</h1>
            <div className="answer" >
                {answers[1].map((answer) =>
                    <p className="answer--value">{answer.replace(/&quot;/g, '"')}</p>
                )}
            </div>

            <h1 className="question">{questions[2].replace(/&quot;/g, '"')}</h1>
            <div className="answer">
                {answers[2].map((answer) =>
                    <p className="answer--value">{answer.replace(/&quot;/g, '"')}</p>
                )}
            </div>

            <h1 className="question">{questions[3].replace(/&quot;/g, '"')}</h1>
            <div className="answer">
                {answers[3].map((answer) =>
                    <p className="answer--value">{answer.replace(/&quot;/g, '"')}</p>
                )}
            </div>

            <h1 className="question">{questions[4].replace(/&quot;/g, '"')}</h1>
            <div className="answer">
                {answers[4].map((answer) =>
                    <p className="answer--value">{answer.replace(/&quot;/g, '"')}</p>
                )}
            </div> */}



            {/* //wrong, do not uncomment this */}
            {/* {quizContent[0].question.map(quiz => 
                <div>
                    <h1 className="question">{quiz}</h1> 
                
                    <div className="answer">
                        {answers.map((answer) =>
                            <p className="answer--value">{answer}</p>
                        )}
                    </div>
                    
                </div>
            )} */}

            {/* <button className="btn ans">Check answers</button> */}
        </div>
    )

}