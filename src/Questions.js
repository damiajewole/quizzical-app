import { nanoid } from 'nanoid';
import React from 'react';
import shuffle from "./shuffle";
import './style.css';
import { useMemo, useState, useEffect } from 'react';

export default function Questions(props){
    const [options, setOptions] = useState([
        ...props.data.incorrect_answers,
        props.data.correct_answer
    ])
    const [userAnswer, setUserAnswer] = useState([])
    
    // take the array of options and shuffle them, then useMemo to make sure they are only shuffled once, and that is the beginning of the page
    useMemo(() => {
        setOptions(shuffle(options));
    }, [options]);

    useEffect(() => {
        const storedAnswer = localStorage.getItem('userAnswer')
        console.log(storedAnswer)
    }, [])

    function chooseOption(event){
        let chosenOption = event.currentTarget.id
        setUserAnswer(prevAnswer => [
            chosenOption
        ]) 
        localStorage.setItem('userAnswer', chosenOption)
    }

    return(
        <div>
            <h1 className='question'>{props.data.question.replace(/&quot;/g, '"')}</h1>
            <div className="answer">
                {options.map((opt) =>
                    <div className={(userAnswer == opt) ? "try yes": "try"} key ={nanoid()} id={`${opt}`} onClick={chooseOption}>
                        <p className="answer--value" >{opt.replace(/&quot;/g, '"')} </p>
                    </div>
                )}
            </div>
            {/* {props.handleCallback(userAnswer)} */}
        </div>
    )
}





