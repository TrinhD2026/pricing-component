import React from 'react';
import './Option.css';

function Option({offer, priceOption}) {
    return (
        <div className={`container__option ${offer.name==="Professional" ? 'special' : ''}`}>
            <p className="name">{offer.name}</p>
            <div className="price">
                <p>{`$`}</p>
                <p>{priceOption==='annually'? offer.annuallyPrice : offer.monthlyPrice}</p>
            </div>
            <p className="feature">{`${offer.features.storage} ${offer.features.storageUnit} Storage`}</p>
            <p className="feature">{`${offer.features.numOfUsers} users allowed`}</p>
            <p className="feature">{`Send up to ${offer.features.messageCapacity} ${offer.features.messageCapacityUnit}`}</p>
            <button className="wide-btn">LEARN MORE</button>
        </div>
    )
}

export default Option;