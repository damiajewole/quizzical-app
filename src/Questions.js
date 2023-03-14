import { nanoid } from 'nanoid';
import React from 'react';
import shuffle from "./shuffle";
import './style.css';
import { useMemo, useState, memo, useEffect } from 'react';

const MemoizedQuestions = memo(({data, click, handleAnswer, game}) => {
    const [options, setOptions] = useState([])
    const [userAnswer, setUserAnswer] = useState(false)

    useEffect(() => {
        setOptions([
            ...data.incorrect_answers,
            data.correct_answer
        ])
    }, [data.correct_answer, game])


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

    return(
        <div>
            <h1 className='question'>{data.question.replace(/&quot;/g, '"')}</h1>
            <div className="answer">
                {options.map((opt) =>
                <div className='answer'>
                    {click ? 
                    <div className={(data.correct_answer == opt) ? "try correct": ((userAnswer == opt) ? "try wrong": "try reduce")} key ={nanoid()} id={`${opt}`} onClick={chooseOption}>
                        <p className={(data.correct_answer == opt) ? "answer--value": "answer--value red"} >{opt.replace(/&quot;/g, '"')} </p>
                    </div>
                    :
                    <div className={(userAnswer == opt) ? "try yes": "try"} key ={nanoid()} id={`${opt}`} onClick={chooseOption}>
                        <p className="answer--value" >{opt.replace(/&quot;/g, '"')} </p>
                    </div>
                    }
                </div>
                )}
            </div>
        </div>
    )
})

export default memo(MemoizedQuestions)





