import React from 'react';
import Balance from "./components/Balance.jsx";
import Operation from "./components/Operation.jsx";

const App = () => {
    return (
        <div className='container'>
            <Balance/>
            <Operation/>
        </div>
    );
};

export default App;