import { useState } from 'react'
import ButtonPrimary from './ButtonPrimary';
import Details from '../Details';
import Description from "../Description";

const Modal = ({ isVisible, onClose}) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [showModal, setShowModal] = useState(false)
  
  
  if (!isVisible) return null;

  const handleClose = (e) => {
    if(e.target.id === 'wrapper') onClose();
  }

  const handleChange = () => {
    if(e.target.id === 'wrapper') onClose();
  }

 

  return (
    <div className='fixed inset-0 bg-black-500 bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
    onClick={handleClose}
    id='wrapper'
    >
      <div className='w-[600px]'>
        <button className='text-white text-xl place-self-end' onClick={() => onClose()}>X</button>
        <div className="bg-gray-100 rounded-lg shadow-md p-10 w-59 ">
          <div className='text-center p-8'><h3>Pick Date and Time</h3></div>
        <h3>Pick Date</h3>
            <input
            type="date"
            className="w-full h-70  border-2 p-2 cursor-pointer mb-4"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <div className='p-10'></div>
          <h3>Pick Time</h3>
           <select value={time} onChange={(e) => setTime(e.target.value)} 
            className='w-full h-70  border-2 p-2 cursor-pointer mb-4'
            
           >

            <option value="">Select time</option>
            <option value={1}>08:00</option>
            <option value={2}>09:00</option>
            <option value={3}>10:00</option>
            <option value={4}>11:00</option>
            <option value={5}>13:00</option>
            <option value={6}>14:00</option>
            <option value={7}>16:00</option>
           </select>
          <div className='flex columns-2 p-10'>
          <button className="py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-blue-500 hover:shadow-blue-md transition-all outline-none"
            onClick={() => setShowModal(true)}
            onChange={handleChange}
          >
            Next
          </button>
          <div className='columns-2 p-8 flex'></div>
          <button className="py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-blue-500 hover:shadow-blue-md transition-all outline-none"
            onClick={() => onClose()}
            onChange={handleChange}
          >
              Cancel
          </button>
          </div>
        </div>
      </div>
      <Description isVisible={showModal} onClose={() => setShowModal(false)}/>
    </div>
  )
}

export default Modal