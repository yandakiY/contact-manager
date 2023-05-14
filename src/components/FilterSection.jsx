import React from 'react'

const FilterSection = () => {
    return (
        <>
            <input type='text' placeholder='Search...' style={{width:'100%',color:'black',borderRadius:'5px'}} className='p-2 border-2 border-slate-950' />
            <br />
            <input type="checkbox" name="" id="" /> View Fav contacts
        </>
    )
}

export default FilterSection