import {useState} from 'react';
import './App.css';
import Period from './components/Period.jsx';
import Option from './components/Option.jsx';

function App() {
    const [count,setCount]=useState(0);

    return (
        <>
            <h1>Our Pricing</h1>
            <Period />
            <div className="container__offers">
                <Option name={"Basic"}
                    price={199.99}
                    storage={"500 GB"}
                    numOfUsers={2}
                    messageStorage={"3 GB"} />
                <Option name={"Professional"}
                    price={249.99}
                    storage={"1 TB"}
                    numOfUsers={5}
                    messageStorage={"10 GB"} />
                <Option name={"Master"}
                    price={399.99}
                    storage={"2 TB"}
                    numOfUsers={10}
                    messageStorage={"20 GB"} />
            </div>
        </>
    )
}

export default App
