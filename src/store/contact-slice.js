// State of Category

import {createSlice} from '@reduxjs/toolkit'

const contactSlice = createSlice({
    name:'contacts',
    initialState:{contacts:[] , total:0},
    reducers:{
        setContacts(state , action){
            state.contacts = action.payload
            state.total = state.contacts.length
        },
        deleteContactById(state , action){
            // Get the id who is selected
            let id = action.payload

            // use filter pour delete l'element
            state.contacts = state.contacts.filter(e => e.id !== id)
        }
    }
})


export const actionsContacts = contactSlice.actions;

export default contactSlice