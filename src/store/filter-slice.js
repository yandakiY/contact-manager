import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name:'filters',
    initialState:{textFilter:''},
    reducers:{
        settextFilter(state , action){
            state.textFilter = action.payload
        }
    }
})

export const actionsFilter = filterSlice.actions

export default filterSlice;