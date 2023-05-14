import React from 'react'
import RowContact from './RowContact'

const TableContact = ({contacts}) => {
  return (
    <div>
        {contacts.map(e => <RowContact contact={e}/>)}
    </div>
  )
}

export default TableContact