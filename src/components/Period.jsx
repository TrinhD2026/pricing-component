import React from 'react';
import './Period.css';

function Period({priceOption, handleTogglePriceOption}) {
    console.log("period render");

    return (
        <div className="container__period">
            <p>Annually</p>
            <button className={`toggle-btn ${priceOption==="monthly"? 'toggled':''}`} onClick={handleTogglePriceOption}>
                <div className="thumb"></div>
            </button>
            <p>Monthly</p>
        </div>
    )
}

export default Period;