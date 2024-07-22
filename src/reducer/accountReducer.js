import {depositAction, withdrawAction} from "../actions/accountActions.js";
import {createReducer} from "@reduxjs/toolkit";

// export const accountReducer = (state = {balance: 0}, action) => {
//     switch (action.type) {
//         case depositAction.type:
//             return {...state, balance: state.balance + action.payload};
//         case withdrawAction.type:
//             const res = state.balance - action.payload;
//             return {...state, balance: res < 0 ? state.balance : res};
//         default:
//             return state;
//     }
// }

export const accountReducer = createReducer({balance: 0}, (builder) => {
    builder
        .addCase(depositAction, (state, action) => {
            state.balance = state.balance + action.payload;
        })
        .addCase(withdrawAction, (state, action) => {
            const res = state.balance - action.payload;
            state.balance = res > -1000 ? res : state.balance;
        })
})