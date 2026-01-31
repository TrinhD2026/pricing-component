import React from 'react';
import {useState,useRef} from 'react';
import './Option.css';

function Option({name, price, storage, numOfUsers, messageStorage}) {
    return (
        <div className={`container__option ${name==="Professional" ? 'special' : ''}`}>
            <p className="name">{name}</p>
            <div className="price">
                <p>{`$`}</p>
                <p>{price}</p>
            </div>
            <p className="feature">{`${storage} Storage`}</p>
            <p className="feature">{`${numOfUsers} users allowed`}</p>
            <p className="feature">{`Send up to ${messageStorage}`}</p>
            <button className="wide-btn">LEARN MORE</button>
        </div>
    )
}

export default Option;