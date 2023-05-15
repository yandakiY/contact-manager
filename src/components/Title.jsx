import { Box, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddContact from './AddContact'

const Title = ({handleAdd}) => {

  const [openModal, setopenModal] = useState(false)

  const handleOpenModal = () => {
    setopenModal(true)
  }

  const handleCloseModal = () => {
    setopenModal(false)
  }


  return (
    <>
      <div className='flex flex-row justify-between'>
        <h1 className='text-3xl text-white'>Contacts</h1>
        {/* Button component for add new contact */}
        <button onClick={handleOpenModal} className='text-xl border border-white p-3 hover:bg-slate-400 rounded-xl'>
          +
        </button>
      </div>

      <AddContact openModal={openModal} handleAdd={handleAdd} handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal} />
    </>
  )
}

export default Title