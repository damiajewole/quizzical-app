import { nanoid } from 'nanoid';
import React from 'react';
import shuffle from "./shuffle";
import './style.css';
import { useMemo, useState, memo, useEffect } from 'react';

const MemoizedQuestions = memo(({data, click, handleAnswer, game}) => {
    const parser = new DOMParser();
    const [options, setOptions] = useState([])
    const [userAnswer, setUserAnswer] = useState(false)

    useEffect(() => {
        setOptions([
            ...data.incorrect_answers,
            data.correct_answer
        ])
    }, [data.correct_answer, data.incorrect_answers, game])


    useMemo(() => {
        setOptions(shuffle(options));
    }, [options]);

    function chooseOption(event){
        let chosenOption = event.currentTarget.id
        setUserAnswer(chosenOption) 

        if(chosenOption === data.correct_answer) {
            handleAnswer(true);
        } else {
        handleAnswer(false);
        }
    }
    const decodedQuestion = parser.parseFromString(`<!doctype html><body>${data.question}`, 'text/html').body.textContent;
    

    return(
        <div>
            <h1 className='question'>{decodedQuestion}</h1>
            <div className="answer--div">
                {options.map((opt, i) => {
                    const decodedOpt = parser.parseFromString(`<!doctype html><body>${opt}`, 'text/html').body.textContent;
                    return(
                        <div className='answer' key={i}>
                            {click ? 
                            <div className={(data.correct_answer === decodedOpt) ? "try correct": ((userAnswer === decodedOpt) ? "try wrong": "try reduce")} key ={nanoid()} id={`${decodedOpt}`} onClick={chooseOption}>
                                <p className={(data.correct_answer === decodedOpt) ? "answer--value": "answer--value red"} >{decodedOpt} </p>
                            </div>
                            :
                            <div className={(userAnswer === decodedOpt) ? "try yes": "try"} key ={nanoid()} id={`${decodedOpt}`} onClick={chooseOption}>
                                <p className="answer--value" >{decodedOpt} </p>
                            </div>
                            }
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
})

export default memo(MemoizedQuestions)





