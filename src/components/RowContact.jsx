import { Avatar, Box, Button, IconButton, Menu, MenuItem, Modal, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UpdateContact from './UpdateContact';
import { useDispatch, useSelector } from 'react-redux';
import { actionsContacts } from '../store/contact-slice';
import { getContacts } from '../firebase';
import apiAxios from '../axios/apiAxios';

const RowContact = ({ contact, textFilter }) => {

    let dispatch = useDispatch();
    const contactsState = useSelector(state => state.contacts.contacts)

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

    // const deleteContactFirebase = async (id) =>{
    //     // 1- get lists of contacts
    //     // 2- get id of each contacts in contact
    //     // 3- get the id who correspond with the contact selected
    //     // 4- use .delete and the id find for delete the contact .delete(/..../id.json)
    //     var indexFirebase;
    //     // 1-
    //     const contactsLists = await getContacts();

    //     // 2-
    //     let idContacts = contactsLists.map(contact => contact.id)

    //     // 3-
    //     idContacts.map((e , i) => e === id ? indexFirebase = i : 0)

    //     // console.log(process.env.REACT_APP_URL+`${indexFirebase}.json`)
    //     // 4- use .axios.delete 
    //     await apiAxios.delete(process.env.REACT_APP_URL+`${indexFirebase}.json`)
    //         .then(data => console.log(data))
    //         .catch(err => console.error(err))
    //     console.log(indexFirebase)
    // }


    // Delete a contact in database
    const deleteContact = async (id) =>{
        // Delete the contact in the state management
        dispatch(actionsContacts.deleteContactById(id))

        // Use filter function for delete element who correspond to id
        let contactsToSend = contactsState.filter(e => e.id !== id)

        // use apiAxios for send the new state contacts in realtime database with method .put()
        await apiAxios.put(process.env.REACT_APP_BASE_URL , contactsToSend)
            .then(e => console.log("Delete"+id))
            .catch(err => console.error(err))

        // Close of the menu
        handleClose()
        
    }
    

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
                        <MenuItem onClick={() => deleteContact(contact.id)}>Delete</MenuItem> {/* Delete the contact when is clicked */}
                    </Menu>
                </div>
            </div>

            {/* Modal Update */}
            <UpdateContact contact={contact} openModalUpdate={openModalUpdate} handleCloseModalUpdate={handleCloseModalUpdate} />
        </>
    )
}

export default RowContact