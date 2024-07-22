import {errorQuote, pendingQuote, putQuote} from "../actions/quoteAction.js";
import {createReducer} from "@reduxjs/toolkit";

export const quoteReducer = createReducer({text: "Hello world!"}, (builder) => {
    builder
        .addCase(putQuote, (state, action) => {
            state.text = action.payload;
        })
        .addCase(pendingQuote, (state) => {
            state.text = "Pending...";
        })
        .addCase(errorQuote, (state) => {
            state.text = "Error!";
        })
})


// export const quoteReducer = (state = {text: 'Winter is coming...'}, action) => {
//     switch (action.type) {
//         case PUT_QUOTE:
//             return {...state, text: action.payload};
//         case PENDING_QUOTE:
//             return {...state, text: "Pending..."};
//         case ERROR_QUOTE:
//             return {...state, text: "Error!"};
//         default:
//             return state;
//     }
// }

