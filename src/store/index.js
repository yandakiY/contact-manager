import {configureStore} from '@reduxjs/toolkit'
import contactSlice from './contact-slice'
import filterSlice from './filter-slice'

const store = configureStore({
    reducer:{
        contacts: contactSlice.reducer,
        filters: filterSlice.reducer
    }
})

export default store