import {createSlice} from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: {},
    reducers: {
        putWeather: (state, action) => {return {...state, ...action.payload}}
    }
})

export const {putWeather} = weatherSlice.actions;
export default weatherSlice.reducer;