import React from 'react';
import shuffle from "./shuffle";
import './style.css';
// import { useState, useMemo } from 'react';

export default function Questions(props){
    const [select, setSelect] = React.useState(false)
    let options = [
        ...props.data.incorrect_answers,
        props.data.correct_answer
    ]
    
    options = shuffle(options)
    function doThis(){
        setSelect(true)
        console.log("clicked")
    }

    return(
        <div>
            <h1 className='question'>{props.data.question.replace(/&quot;/g, '"')}</h1>
            <div className="answer">
                {options.map((opt) =>
                    <p className={select ? "answer--value yes": "answer--value"}>{opt.replace(/&quot;/g, '"')}</p>
                )}
            </div>
            
        </div>
    )
}




