import {useState} from 'react';
import './App.css';
import Period from './components/Period.jsx';
import Option from './components/Option.jsx';

const offers=[
    {
        name: "Basic",
        monthlyPrice: 19.99,
        annuallyPrice: 199.99,
        features: {
            storage: 500,
            storageUnit: "GB",
            numOfUsers: 2,
            messageCapacity: 3,
            messageCapacityUnit: "GB",
        }
    },
    {
        name: "Professional",
        monthlyPrice: 24.99,
        annuallyPrice: 249.99,
        features: {
            storage: 1,
            storageUnit: "TB",
            numOfUsers: 5,
            messageCapacity: 10,
            messageCapacityUnit: "GB",
        }
    },
    {
        name: "Master",
        monthlyPrice: 39.99,
        annuallyPrice: 399.99,
        features: {
            storage: 2,
            storageUnit: "TB",
            numOfUsers: 10,
            messageCapacity: 20,
            messageCapacityUnit: "GB",
        }
    },
];

function App() {
    const [priceOption,setPriceOption]=useState("annually");

    function togglePriceOption() {
        setPriceOption(priceOption==="annually"? "monthly":"annually");
        console.log("toggle price option");
    }

    console.log("App rendering");
    return (
        <>
            <h1>Our Pricing</h1>
            <Period priceOption={priceOption}
                handleTogglePriceOption={togglePriceOption} />
            <ul className="container__offers">
                {
                    offers.map(offer => {
                        return (
                            <li key={offer.name}>
                                <Option offer={offer}
                                    priceOption={priceOption} />
                            </li>
                        );
                    })
                }
            </ul>
        </>
    )
}

export default App
