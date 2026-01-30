import React from 'react';
import {useState,useRef} from 'react';
import './Period.css';

function Period() {
    const [period,setPeriod]=useState("annually");
    const removeBtn=useRef(null);
    function handleTogglePeriod() {
        setPeriod(period==="annually"? "monthly": "annually");
    }
    return (
        <div className="container__period">
            <p>Annually</p>
            <button className={`toggle-btn ${period === "monthly"? 'toggled':''}`} onClick={handleTogglePeriod}>
                <div className="thumb"></div>
            </button>
            <p>Monthly</p>
        </div>
    )
}

export default Period;