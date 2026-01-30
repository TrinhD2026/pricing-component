import React from 'react';
import {useState,useRef} from 'react';
import './Option.css';

function Option({name, price, storage, numOfUsers, messageStorage}) {
    return (
        <div className="container__option">
            <p className="name">{name}</p>
            <p className="price">{`$`}<span>{price}</span></p>
            <p>{`${storage} Storage`}</p>
            <p>{`${numOfUsers} users allowed`}</p>
            <p>{`Send up to ${messageStorage}`}</p>
            <button className="wide-btn">Learn more</button>
        </div>
    )
}

export default Option;