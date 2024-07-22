import {createSlice} from "@reduxjs/toolkit";

const accountSlice = createSlice({
    name: 'account',
    initialState: {balance:10},
    reducers: {
        deposit(state,action) {
            state.balance = state.balance + action.payload;
        },
        withdraw(state,action){
            const res = state.balance - action.payload;
            state.balance = res > -1000 ? res : state.balance;
        }
    }
})

export const {deposit,withdraw} = accountSlice.actions;
export default accountSlice.reducer;