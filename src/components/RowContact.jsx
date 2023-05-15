import { Avatar, Box, Button, IconButton, Menu, MenuItem, Modal, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UpdateContact from './UpdateContact';

const RowContact = ({ contact, textFilter }) => {

    const [openModalUpdate, setopenModalUpdate] = React.useState(false)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Open and close Modal Update
    const handleOpenModalUpdate = () => {
        setopenModalUpdate(true)
        setAnchorEl(null)
    }

    const handleCloseModalUpdate = () =>{
        setopenModalUpdate(false)
    }

    // Change value of input in Modal
    

    return (
        <>
            <div className="mt-2 border rounded px-1 py-1 flex flex-row justify-between">
                {/* Recherche : {textFilter} */}
                <div className="flex flex-row items-center">
                    <div>
                        <Avatar src="" />
                    </div>
                    <div className="mx-2 flex flex-col">
                        <div>{contact.name}</div>
                        <div>{contact.telephone}</div>
                    </div>
                </div>
                <div>
                    <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleOpenModalUpdate}>Update</MenuItem> {/* Open Modal Update */}
                        <MenuItem onClick={handleClose}>Delete</MenuItem> {/* Delete the contact when is clicked */}
                    </Menu>
                </div>
            </div>

            {/* Modal Update */}
            <UpdateContact contact={contact} openModalUpdate={openModalUpdate} handleCloseModalUpdate={handleCloseModalUpdate} />
        </>
    )
}

export default RowContact