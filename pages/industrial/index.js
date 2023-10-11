import { useState } from 'react'
import Details from '../../components/Details'

const Industrial = () => {

  const [name, setName] = useState('')
  const [yourComapanyName, setYourCompanyName] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [instructions, setInstructions] = useState('')
  const [date, setDate] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [category, setCategory] = useState('')
  const [quote, setQuote] = useState('')
  const [budget, setBudget] = useState('')
  const [currency, setCurrency] = useState('')
  const [payment, setPayment] = useState('')
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

  const handleBudget = (e) => {
    setBudget(e.target.value)
  }

  const handlePayment = (e) => {
    setPayment(e.target.value)
  }

  const handleCurrency = (e) => {
    setCurrency(e.target.value)
  }

  const handleQuote = (e) => {
    setQuote(e.target.value)
  }

  const handleInstructions = (e) => {
    setInstructions(e.target.value)
  }

  const handleCategory = (e) => {
    setCategory(e.target.value)
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

  const handleClose = (e) => {
  if(e.target.id === 'wrapper') onClose();
  }

  const handleChange = (e) => {
  if(e.target.id === 'wrapper') onClose();

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
      <h2 className="text-3xl  font-medium text-black-600 mb-4 text-center">Request For Quotation</h2>
      <p className='text-left justify-center flex'>Provide information for your project</p>
      <div className=' justify-center flex text-2xl'>
      <div className="bg-white-300 rounded-lg shadow-md p-10 w-59 ">
      
        <h3 className="text-3xl  font-medium text-black-600 text-center mb-8">Category and Product</h3>
        <label className='mb-4'>Category:</label>
          <select value={category} onChange={handleCategory}
            className="w-full h-70  border-2 p-2 cursor-pointer mb-4"
          >
          <option value="">Choose an option</option>
          <option value="build">Build</option>
          <option value="design">Design</option>
          <option value="test">Test</option>
          <option value="analysis">Analysis</option>
          </select>
        

        <label>Close Date</label>
        <input
            type="date"
            className="w-full h-70  border-2 p-2 cursor-text mb-4"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          
          <label >What you wish to build:</label><br></br>
          <input
            type="text"
            className="h-70 w-full border-2 p-2 cursor-text mb-4"
            placeholder="Enter project"
            value={yourComapanyName}
            onChange={handleCompanyName}
            required
          />

          <label htmlFor="projectDescription">Additonal information</label>
        <textarea
          id="projectDescription"
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
          rows={4}
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
        <label className='mb-4'>Additional documents:</label><br></br>
          <input type="file" accept=".pdf,.doc,.docx,.png,.jpeg" onChange={handleFileChange} />
            {selectedFile && <p>Selected File: {selectedFile.name}</p>}
            <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="drop-area mb-4 mt-4"
            >
            </div>
          <label>Quote purpose:</label>
          <select value={quote} onChange={handleQuote}
            className="w-full h-70  border-2 p-2 cursor-pointer mb-4"
          >
          <option value="">Choose an option</option>
          <option value="new">New Project</option>
          <option value="existing">Existing Project</option>
          <option value="other">Other</option>
          </select>
        
          
          
          <h3 className="text-2xl  font-medium text-black-600 mb-4 mt-4">Budget and Payment</h3>
          <label>Budget:</label>
          <select value={budget} onChange={handleBudget}
            className="w-full h-70  border-2 p-2 cursor-pointer mb-4"
          >
          <option value="">Please select</option>
          <option value="first">1 000</option>
          <option value="second">1 000 - 5 000</option>
          <option value="third">5 000 - 10 000</option>
          <option value="fourth">10 000 - 50 000</option>
          <option value="fifth">50 000+</option>
          </select>
        

          <label>Currency:</label>
          <select value={currency} onChange={handleCurrency}
            className="w-full h-70  border-2 p-2 cursor-pointer mb-4"
          >
          <option value="">Please select</option>
          <option value="usd">USD</option>
          <option value="zar">ZAR</option>
          </select>
        

        <label>Payment Type:</label>
          <select value={payment} onChange={handlePayment}
            className="w-full h-70  border-2 p-2 cursor-pointer mb-4"
          >
          <option value="">Please select</option>
          <option value="cod">Cash on delivery</option>
          <option value="eft">EFT</option>
          <option value="ocp">Ordinary card payment</option>
          </select>
       

          <div className='flex columns-2 mt-2'>
          <button className="py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-blue-500 hover:shadow-blue-md transition-all outline-none mb-4"
            onClick={() => setShowModal(true)}
            onSubmit={handleSubmit}
          >
            Submit
          </button>
          </div>

      </div>
      </div>
      <Details isVisible={showModal} onClose={() => setShowModal(false)}/>
      </div>
  )
}

export default Industrial

