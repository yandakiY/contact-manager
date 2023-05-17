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
        },

        updateContact(state , action){
            // Two params : id and the new object
            // const id = action.payload.id
            const contactData = action.payload

            // Read all elements of state contacts, and find the elements who correspond to id
            // Replace by the contactData
            state.contacts = state.contacts.map(e => e.id === contactData.id ? contactData : e)
        }
    }
})


export const actionsContacts = contactSlice.actions;

export default contactSlice