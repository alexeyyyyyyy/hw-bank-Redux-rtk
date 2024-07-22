import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchQuote = createAsyncThunk(
    "quote/fetchQuote",
    async (thunkAPI) => {
        const response = await fetch("https://api.gameofthronesquotes.xyz/v1/random");
        const data = await response.json();
        return {
            text: data.sentence
    }
    }
)
