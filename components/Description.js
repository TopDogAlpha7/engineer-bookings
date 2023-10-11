import { useState } from 'react'
import Details from './Details';

const Description = ({ isVisible, onClose }) => {

  const [projectDescription, setProjectDescription] = useState('')
  const [showModal, setShowModal] = useState(false);

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
    id='wrapper'>
      <div className='w-[600px]'>
      <button className='text-white text-xl place-self-end' onClick={handleClose}>X</button>
      <div className="bg-gray-100 rounded-lg shadow-md p-10 w-59 ">
      <div className='text-center p-8'><h3>Pick Date and Time</h3></div>
        <div className="mb-4">
        <label htmlFor="projectDescription">Project Description:</label>
        <textarea
          id="projectDescription"
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          rows={4}
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          required
        />
      </div>
      <div className='flex columns-2 p-10'>
          <button className="py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-blue-500 hover:shadow-blue-md transition-all outline-none"
            onClick={() => setShowModal(true)}
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
      <Details isVisible={showModal} onClose={() => setShowModal(false)}/>  
    </div>
  )
}

export default Description