import React from 'react'

const FilterSection = ({ textFilter, favContact, settextFilter, setfavContact }) => {
    return (
        <>
            <input
                type='text'
                placeholder='Search...'
                style={{ width: '100%', color: 'black', borderRadius: '5px' }} 
                className='p-2 border-2 border-slate-950'
                value={textFilter}
                onChange={e => settextFilter(e.target.value)}
            />
            <br />
            {/* <input type="checkbox" value={favContact} onClick={e => setfavContact(e.currentTarget.checked)} /> View Fav contacts */}
        </>
    )
}

export default FilterSection