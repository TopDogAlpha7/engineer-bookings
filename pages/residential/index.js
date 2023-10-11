import { useState } from 'react'
import Link from 'next/link'
 

const Request = () => {
  

  const [name, setName] = useState('')
  const [yourComapanyName, setYourCompanyName] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [instructions, setInstructions] = useState('')
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleInstructions = (e) => {
    setInstructions(e.target.value)
  }

  const handleCompanyName = (e) => {
    setYourCompanyName(e.target.value)
  }

  const handleAddress = (e) => {
    setAddress(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8081/sendEmail/confirmProfileEmail?recipient=${email}&subject=Test`, {
        mode: 'no-cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          instructions,
          address,
          name,
          yourComapanyName,
          email,
        }),
      });

      const data = await response.json();
      console.log(data.message); // Log the server response message

      // Handle any additional logic after form submission here
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };

  return (
    <div className=' bg-gray-500 '
   >
      <h2 className="text-5xl  font-medium text-black-600 mb-10 text-center">Request For Quotation</h2>
      <div className=' justify-center flex text-3xl'>
      <div className="bg-white-300 rounded-lg shadow-md p-10 w-59 ">
        <h3 className="text-4xl  font-medium text-black-600 mb-4 mt-4">Quote for:</h3>
        <label>Name</label><br></br>
        <input
            type="text"
            className="h-70 w-full border-2 p-2 cursor-text mb-4"
            placeholder="Enter Name"
            value={name}
            onChange={handleName}
            required
          />
          <br></br>
          <label >Company Name</label><br></br>
          <input
            type="text"
            className="h-70 w-full border-2 p-2 cursor-text mb-4"
            placeholder="Enter Company Name"
            value={yourComapanyName}
            onChange={handleCompanyName}
            required
          />
          <br></br>
          <label >Address</label><br></br>
          <input
            type="text"
            className="h-70 w-full border-2 p-2 cursor-text  mb-4"
            placeholder="Enter address"
            value={address}
            onChange={handleAddress}
            required
          />
          <br></br>
          <label htmlFor="email">Email</label><br></br>
          <input
            type="text"
            className="h-70 w-full border-2 p-2 cursor-text mb-4"
            placeholder="Enter email"
            value={email}
            onChange={handleEmail}
            required
          />
          
          <hr></hr>
          <h3 className="text-2xl  font-medium text-black-600 mb-4 mt-4">Comments or Special Instructions</h3>
          <textarea
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          rows={4}
          value={instructions}
          onChange={handleInstructions}
          />
          <br></br>
          <label className='mb-4'>Additional documents</label><br></br>
          <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
            {selectedFile && <p>Selected File: {selectedFile.name}</p>}
            <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="drop-area mb-4"
            >
            Drop files here to upload
            </div>
          <div className='flex columns-2 mb-20 mt-2'>
          
          <Link href='/filters'>
          <a>

          <button className="py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-blue-500 hover:shadow-blue-md transition-all outline-none"
            onClick={handleSubmit}
            onSubmit={handleSubmit}
          >
            Submit
          </button>
          </a>
          </Link>
          </div>

      </div>
      </div>
      </div>
  )
}

export default Request

