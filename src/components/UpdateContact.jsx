import { Box, Modal, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'

const UpdateContact = ({ contact, openModalUpdate, handleCloseModalUpdate }) => {

    const { register, handleSubmit , setValue , formState: { errors } } = useForm({
        defaultValues:{
            name:contact.name,
            telephone:contact.telephone
        }
    });

    const getValues = () =>{
        setValue('name' , contact.name)
        setValue('telephone' , contact.telephone)
    }

    React.useEffect(() =>{
        getValues();
    })

    return (
        <>
            <Modal
                open={openModalUpdate}
                onClose={handleCloseModalUpdate}
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
                    <form onSubmit={handleSubmit(data => console.log(data , contact.id))}>
                        <div>
                            <div className='flex flex-col mt-4'>
                                <label>Nom :</label>
                                <input type='text' placeholder='Your name' {...register('name' , {required:'This field is required' , maxLength:16})} className='p-2 border-2 rounded' />
                                {errors.name && <p className='text-red-500 font-bold'>{errors.name?.message}</p>}
                            </div>
                            <div className='flex flex-col mt-4'>
                                <label>Telephone :</label>
                                <input type='text' placeholder='Your telephone' {...register('telephone' , {required:'This field is required' , pattern: /^[0-9]+$/i })} className='p-2 border-2 rounded' />
                                {errors.telephone && <p className='text-red-500 font-bold'>{errors.telephone?.message}</p>}
                            </div>
                        </div>

                        {/* Button 'Submit' and 'Cancel' */}
                        <div className='mt-4 flex flex-row justify-evenly'>
                            <button className='bg-slate-500 hover:bg-slate-600 rounded p-2 text-white'>
                                Modifier
                            </button>
                            <button className='bg-red-500 hover:bg-red-600 rounded p-2 text-white' onClick={handleCloseModalUpdate}>
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