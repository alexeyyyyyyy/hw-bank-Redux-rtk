import {createSlice} from "@reduxjs/toolkit";
import {fetchQuote} from "../actions/quoteAction.js";

const quoteSlice = createSlice({
    name: "quote",
    initialState: {text: "Press  Button `Get Quote` "},

    extraReducers:(builder) => {
        builder
            .addCase(fetchQuote.pending, (state) => {
            state.text = "Pending..."
        })

            .addCase(fetchQuote.fulfilled,(state,action) => {
                state.text = action.payload.text;

        })
            .addCase(fetchQuote.rejected,(state) => {
            state.text = "Error!"
        })
}

})

export const {} = quoteSlice.actions;
export default quoteSlice.reducer;