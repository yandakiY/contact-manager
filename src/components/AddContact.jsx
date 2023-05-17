import { Box, Modal, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import apiAxios from '../axios/apiAxios';

const AddContact = ({ openModal, handleAdd , handleOpenModal, handleCloseModal }) => {

    const { register, handleSubmit , setValue, formState: { errors } } = useForm();

    const submitData =  data =>{
        handleAdd(data)
        handleCloseModal();
    }

    const wideField = () => {
        setValue('name' , '')
        setValue('telephone' , '')
    }

    React.useEffect(() =>{
        wideField();
    })

    return (
        <>
            {/* Modal Component */}
            <Modal
                open={openModal}
                onClose={handleCloseModal}
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
                        Add a new contact
                    </Typography>
                    <form onSubmit={handleSubmit(submitData)}>
                        <div>
                            <div className='flex flex-col mt-4'>
                                <label>Nom :</label>
                                <input {...register('name' , {required:'This field is required' , maxLength:16})} className='p-2 border-2 rounded' />
                                {errors.name && <p className='text-red-500 font-bold'>{errors.name?.message}</p>}
                            </div>
                            <div className='flex flex-col mt-4'>
                                <label>Telephone :</label>
                                <input {...register('telephone', {required:'This field is required' , pattern: /^[0-9]+$/i })} className='p-2 border-2 rounded' />
                                {errors.telephone && <p className='text-red-500 font-bold'>{errors.telephone?.message}</p>}
                            </div>
                        </div>



                        {/* Button 'Submit' and 'Cancel' */}
                        <div className='mt-4 flex flex-row justify-evenly'>
                            <button type='submit' className='bg-slate-500 hover:bg-slate-600 rounded p-2 text-white'>
                                Enregistrer
                            </button>
                            <button className='bg-red-500 hover:bg-red-600 rounded p-2 text-white' onClick={handleCloseModal}>
                                Annuler
                            </button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </>
    )
}

export default AddContact