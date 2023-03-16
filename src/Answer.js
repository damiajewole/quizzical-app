import { nanoid } from 'nanoid';
import React from 'react';
import shuffle from "./shuffle";
import './style.css';
import { useMemo, useState } from 'react';

export default function Questions(props){
    const parser = new DOMParser();
    const [options, setOptions] = useState([
        ...props.data.incorrect_answers,
        props.data.correct_answer
    ])
    const [userAnswer, setUserAnswer] = useState([])
    
    // take the array of options and shuffle them, then useMemo to make sure they are only shuffled once, and that is the beginning of the page
    useMemo(() => {
        setOptions(shuffle(options));
    }, [options]);

    // function doThis(){
    //     setSelect(true)
    // }

    //original, unchaged
    // function chooseOption(event){
    //     let chosenOption = event.currentTarget.id
    //     setUserAnswer(prevAnswer => [
    //         ...prevAnswer,
    //         chosenOption
    //     ]) 
    // }

    function chooseOption(event){
        let chosenOption = event.currentTarget.id
        setUserAnswer(prevAnswer => [
            chosenOption
        ]) 
    }
    const decodedQuestion = parser.parseFromString(`<!doctype html><body>${props.data.question}`, 'text/html').body.textContent;

    return(
        <div>
            <h1 className='question'>{decodedQuestion}</h1>
            <div className="answer">
                {options.map((opt) =>{
                    const decodedOpt = parser.parseFromString(`<!doctype html><body>${opt}`, 'text/html').body.textContent;
                    return(
                        <div className={(userAnswer === decodedOpt) ? "try yes": "try"} key ={nanoid()}  id={`${decodedOpt}`} onClick={chooseOption}>
                            <p className="answer--value" >{decodedOpt} </p>
                        </div>
                    )
                }
                )}
            </div>
            {props.handleCallback(userAnswer)}
        </div>
    )
}




