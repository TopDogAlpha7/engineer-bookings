import React from 'react'

const Info = ({isVisible, onClose, children}) => {
    if (!isVisible) return null;

  const handleClose = (e) => {
    if(e.target.id === 'wrapper') onClose();
  }

  const handleChange = () => {
    if(e.target.id === 'wrapper') onClose();
  }


  return (
    <div
    className='fixed inset-0 bg-black-500 bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
    onClick={handleClose}
    id='wrapper'
    >
        <div className='w-[600px]'>
        <button className='text-white text-xl place-self-end' onClick={() => onClose()}>X</button>
        <div className="bg-gray-100 rounded-lg shadow-md p-10 w-59 ">
            {children}
        </div>
        </div>
    
    </div>
  )
}

export default Info