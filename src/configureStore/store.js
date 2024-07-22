import {configureStore} from "@reduxjs/toolkit";
import quoteReducer from "../slices/quoteSlice.js";
import accountReducer from "../slices/accountSlice.js";

export const store = configureStore({
    reducer: {
      account: accountReducer,
      quote: quoteReducer
    }
})