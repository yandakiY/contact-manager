import { Avatar } from '@mui/material'
import React from 'react'

const RowContact = ({ contact }) => {
    return (
        <div className="mt-2 border rounded px-1 py-1">
            <div className="flex flex-row items-center">
                <div>
                    <Avatar src=""/>
                </div>
                <div className="mx-2 flex flex-col">
                    <div>{contact.name}</div>
                    <div>{contact.telephone}</div>
                </div>
            </div>

        </div>
    )
}

export default RowContact