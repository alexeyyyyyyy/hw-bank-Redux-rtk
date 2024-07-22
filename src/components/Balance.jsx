import React from 'react';
import {useSelector} from "react-redux";

const Balance = () => {

    const {balance} = useSelector(store => store.account);
    const {text} = useSelector(store => store.quote);


    return (
        <div className='text-center text-uppercase m-5'>
            <h1 style={{
                color: 'yellow',
                fontWeight: "bold",
                fontSize: "6em"
            }}>Iron Bank of Braavos</h1>
            <h3 style={{
                color: 'grey',
                fontWeight: "bold",
                fontSize: "4em"
            }}><q>{text}</q></h3>
            <h2 style={{
                color: "firebrick",
                fontSize: "5em"
            }}>Balance = {balance}</h2>
        </div>
    );
}

export default Balance;