import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {fetchQuote} from "../actions/quoteAction.js";
import {deposit, withdraw} from "../slices/accountSlice.js";

const Operation = () => {
    const [sum, setSum] = useState(0);
    const dispatch = useDispatch();

    const handleClickGetQuote = () => {
        dispatch(fetchQuote());
    }

    return (
        <>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-lg btn-primary'
                        onClick={() => dispatch(withdraw(sum))}>Withdraw
                </button>
                <input className='text-center form-control-lg'
                       onChange={e => setSum(+e.target.value)}
                       type={'number'} value={sum}/>
                <button className='btn btn-lg btn-primary'
                        onClick={() => dispatch(deposit(sum))}>Deposit
                </button>
            </div>
            <div className={'d-flex justify-content-center'}>
                <button className={'btn btn-info btn-lg'}
                        onClick={handleClickGetQuote}>Get Quote
                </button>
            </div>
        </>
    );

}

export default Operation;