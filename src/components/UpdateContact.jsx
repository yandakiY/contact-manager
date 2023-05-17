import { Box, Modal, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { actionsContacts } from '../store/contact-slice';
import apiAxios from '../axios/apiAxios';

const UpdateContact = ({ contact, openModalUpdate, handleCloseModalUpdate }) => {

    const { register, handleSubmit , setValue , formState: { errors } } = useForm({
        defaultValues:{
            name:contact.name,
            telephone:contact.telephone
        }
    });

    let dispatch = useDispatch()
    let contacts = useSelector(state => state.contacts.contacts)

    const getValues = () =>{
        setValue('name' , contact.name)
        setValue('telephone' , contact.telephone)
    }

    const closeModalUpdate = () =>{

        // Close the modal of Form
        handleCloseModalUpdate()
        //
        getValues()
    }

    const updateContact = async (contactData) => {
        // console.log()

        const dataToUpdate = {id:contact.id ,...contactData}
        // console.log(dataToUpdate)
        // console.log(id)
        dispatch(actionsContacts.updateContact(dataToUpdate))

        // Send all new contacts state in Realtime database
        await apiAxios.put(process.env.REACT_APP_BASE_URL , contacts.map(e => e.id === dataToUpdate.id ? dataToUpdate : e))
            .then(() => console.log('Updating...'))
            .catch(err => console.error(err))

        closeModalUpdate()
    }

    // Given the originally data for each opening of this component
    // React.useEffect(() =>{
    //     getValues();
    // })

    return (
        <>
            <Modal
                open={openModalUpdate}
                onClose={closeModalUpdate}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4
                }}>
                    <Typography id="modal-modal-title" variant="h5" component="h2">
                        Update contact
                    </Typography>
                    <form onSubmit={handleSubmit(updateContact)}>
                        <div>
                            <div className='flex flex-col mt-4'>
                                <label>Nom :</label>
                                <input type='text' placeholder='Your name' {...register('name' , {required:{value:true ,message:'This field is required'} , maxLength:{value:16 , message:'No more 16 charcters'}})} className='p-2 border-2 rounded' />
                                {errors.name && <p className='text-red-500 font-bold'>{errors.name?.message}</p>}
                            </div>
                            <div className='flex flex-col mt-4'>
                                <label>Telephone :</label>
                                <input type='text' placeholder='Your telephone' {...register('telephone' , {required:{value:true , message:'This field is required'} , pattern: {value:/^[0-9]+$/i , message:'Values does not match'} , maxLength:{value:10 , message:'No more 10 charcters'} })} className='p-2 border-2 rounded' />
                                {errors.telephone && <p className='text-red-500 font-bold'>{errors.telephone?.message}</p>}
                            </div>
                        </div>

                        {/* Button 'Submit' and 'Cancel' */}
                        <div className='mt-4 flex flex-row justify-evenly'>
                            <button type='submit' className='bg-slate-500 hover:bg-slate-600 rounded p-2 text-white'>
                                Modifier
                            </button>
                            <button className='bg-red-500 hover:bg-red-600 rounded p-2 text-white' onClick={closeModalUpdate}>
                                Annuler
                            </button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </>
    )
}

export default UpdateContact