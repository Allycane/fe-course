import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    skillList : []
}

export const skillSlice = createSlice({
    name: 'skill',
    initialState,
    reducers: {
        add : (state, action) => {
            state.skillList.push(action.payload)
            console.log(action.payload)
        }
    }
})

export const {add} = skillSlice.actions
export default skillSlice.reducer