import React from 'react';
import './style.css';

export default function Start(props){
    return(
        <div className="page">
            <h1>Quizzical</h1>
            <p>Some description if needed (literally)</p>
            <button className="btn" onClick={props.onClick}>Start quiz</button>
        </div>
    )
}