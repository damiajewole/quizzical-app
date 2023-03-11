import { nanoid } from 'nanoid';
import React from 'react';
import shuffle from "./shuffle";
import './style.css';
import { useMemo, useState, memo } from 'react';

const MemoizedQuestions = memo(({data, click}) => {
    const [options, setOptions] = useState([
        ...data.incorrect_answers,
        data.correct_answer
    ])
    const [userAnswer, setUserAnswer] = useState([])
    console.log("click in Questions" ,click)
    
    // take the array of options and shuffle them, then useMemo to make sure they are only shuffled once, and that is the beginning of the page
    useMemo(() => {
        setOptions(shuffle(options));
    }, [options]);


    function chooseOption(event){
        let chosenOption = event.currentTarget.id
        setUserAnswer(prevAnswer => [
            chosenOption
        ]) 
    }

    return(
        <div>
            <h1 className='question'>{data.question.replace(/&quot;/g, '"')}</h1>
            <div className="answer">
                {options.map((opt) =>
                    <div className={(userAnswer == opt) ? "try yes": "try"} key ={nanoid()} id={`${opt}`} onClick={chooseOption}>
                        <p className="answer--value" >{opt.replace(/&quot;/g, '"')} </p>
                    </div>
                )}
            </div>
        </div>
    )
})

export default memo(MemoizedQuestions)





