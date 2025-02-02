import {createSlice} from "@reduxjs/toolkit";

export const messageSlice = createSlice({
    name: 'message',
    initialState: 'Enter city name',
    reducers: {
        putMessage: (state, action) => action.payload
    }
})

export const {putMessage} = messageSlice.actions;
export default messageSlice.reducer;