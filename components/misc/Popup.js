import { useState } from 'react'
import Link from 'next/link';


const Modal = ({ isVisible, onClose}) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [showModal, setShowModal] = useState(false)
  const [showIndus, setShowIndus] = useState(false)
  
  
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
          <div className='text-center p-8'><h3 className="text-3xl  font-medium text-black-600 text-center">Is your project Residential or Industrial?</h3></div>
          <div className='flex columns-2 p-10'>
        <Link href="/residential">
        <a>
            <button className="py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-blue-500 hover:shadow-blue-md transition-all outline-none"
            onClick={() => setShowModal(true)}
            onChange={handleChange}
            >
            Residential
          </button>
        </a>
        </Link>
        <div className='columns-2 p-8 flex'></div>
        <Link href="/industrial">
        <a>
            <button className="py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-blue-500 hover:shadow-blue-md transition-all outline-none"
             onClick={() => setShowIndus(true)}
             onChange={handleChange}
            >
              Industrial
            </button>
        </a>
        </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal