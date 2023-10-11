import { useState } from 'react'
import Industrial from '../industrial/index';

const index = () => {
    // const [showArea, setShowArea] = useState('Kempton Park');
    const [showIndustry, setShowIndustry] = useState(true);

    const selectedLocation = [
      "Kempton Park",
      "Edenvale",
      "Germiston",
      "Sandton",
      "Midrand",
      "Lombardy"
    ]

    const [showArea, setShowArea] = useState({ 
      place: selectedLocation[0], 
      industry: false
    })

    function handleChange(event) { 
      console.log(event) 
      const {name, value, type, checked} = event.target 
      setShowArea(prevFormData => { 
          return { 
              ...prevFormData, 
              [name]: type === "checkbox" ? checked : value 
          } 
      }) 
  } 
   
   

    

    const handleAreaChange = (area) => {
      const updatedSelectedArea = showArea.includes(area)
        ? showArea.filter(
            (selectedArea) => selectedArea !== area
          )
        : [...showArea, area];
  
      setShowArea(updatedSelectedArea);
    };

    const handleIndustryChange = (industry) => {
      const updatedSelectedIndustry = showIndustry.includes(industry)
        ? showIndustry.filter(
            (selectedIndustry) => selectedIndustry !== industry
          )
        : [...showIndustry, industry];
  
      setShowIndustry(updatedSelectedIndustry);
    };

    const initialState = {
      /* etc */
    };
    
    const Reset = () =>{
     setHeroData(initialState)
    }
    

    const handleArea = (e) => {
      e.target.value
    }


    const companies = [
        {
          id: 1,
          name: "Catech Tambani Engineering Specialists",
          location: "Kempton Park",
          website: "https://catechtambani.co.za/",
          industry: "Mechanical",
          address: "12 Roller St, Spartan, Kempton Park, 1619",
          googleMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14329.706954523044!2d28.170778946722397!3d-26.117625568154057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9513728c155d55%3A0x471222a2f2e229fe!2sCatech%20Tambani%20Engineering%20Specialists!5e0!3m2!1sen!2sza!4v1692966890150!5m2!1sen!2sza",
          phone: '011 392 3718',
          companyType: "Company"
        },
        {
          id: 2,
          name: "Trio Engineering",
          location: "Edenvale",
          website: "https://trioengineering.co.za/",
          industry: "Mechanical",
          address: "Unit 4, 18 Edendale Rd W, Eastleigh, Edenvale, 1609",
          googleMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14327.685459102966!2d28.14238368715819!3d-26.134106799999973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950e69591f2399%3A0x5baf63a22bfc3684!2sTrio%20Engineering!5e0!3m2!1sen!2sza!4v1692967314040!5m2!1sen!2sza",
          phone: '011 392 3718',
          companyType: "Company"
        },
        {
          id: 3,
          name: "Viva Engineering",
          location: "Kempton Park",
          website: "https://vivaeng.co.za/",
          industry: "Structural",
          address: "68 Loper Ave, Spartan, Kempton Park, 1619",
          googleMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14329.431121701555!2d28.186824787158212!3d-26.119874999999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9514801e211beb%3A0xca61ddc2f640c01a!2sViva%20Engineering!5e0!3m2!1sen!2sza!4v1692967432943!5m2!1sen!2sza",
          phone: '011 392 3718',
          companyType: "Company"
        },
        {
          id: 4,
          name: "ProProcess Engineering (Pty) Ltd.",
          location: "Germiston",
          website: "https://proprocesseps.com/",
          industry: "Chemical",
          address: "7 Sam Green Rd, Tunney, Germiston, 1401",
          googleMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14324.70764539975!2d28.16496848715821!3d-26.158367300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9512038329452d%3A0xcdefb50e2218b85a!2sProProcess%20Engineering%20(Pty)%20Ltd.!5e0!3m2!1sen!2sza!4v1692967485023!5m2!1sen!2sza",
          phone: '011 392 3718',
          companyType: "Company"
        },
        {
          id: 5,
          name: "SAICE",
          location: "Midrand",
          website: "https://www.saice.org.za/",
          industry: "Civil",
          address: "Thornhill Office Park, Bekker Rd, Vorna Valley, Midrand, 1685",
          googleMaps: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14342.99605988703!2d28.0931481871582!3d-26.0090379!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956dffb187216f%3A0x6faf8ce0c5f59ff4!2sSAICE!5e0!3m2!1sen!2sza!4v1692967561643!5m2!1sen!2sza",
          phone: '011 392 3718',
          companyType: "Company"
        },
        {
          id: 6,
          name: "MDS Architecture",
          location: "Sandton",
          website: "https://www.mdsarch.co.za/",
          industry: "Architecture",
          address: "4 Stan Rd, Morningside, Sandton, 2057",
          googleMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.999735318029!2d28.04847318112375!3d-26.098927318202687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95733ababe7105%3A0x80911a22ac79fc9b!2sMDS%20Architecture!5e0!3m2!1sen!2sza!4v1692967657378!5m2!1sen!2sza",
          phone: '011 392 3718',
          companyType: "Company"
        },
        {
          id: 7,
          name: "Consulmet South Africa",
          location: "Lombardy",
          website: "https://www.consulmet.com/",
          industry: "Mining",
          address: "South, 15 Friesland Dr, Longmeadow Business Estate, Johannesburg, 1644",
          googleMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.4428073495624!2d28.132173775312644!3d-26.11710137713034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e951294dace89c9%3A0x9c12df1d96899dfb!2sConsulmet%20South%20Africa!5e0!3m2!1sen!2sza!4v1692967708346!5m2!1sen!2sza",
          phone: '011 392 3718',
          companyType: "Company"
        }
      ]

      const filteredData = companies.filter((item) => { 
        if (showArea.place !== "" && showArea.place === item.location){ 
          return true 
         } 
          return false
        });

    
  return (
    <div className="mt-0 px-4 xl:px-8 mx-4 w-full " id="home">
      <h1 className="text-3xl  font-medium leading-relaxed text-black-600 text-center mb-20 ">BluFountain Site Map</h1>
     <div className="flex w-full justify-between">
     <div className=" flex flex-col w-1/4 border-solid border-1 border-gray-100 rounded-lg  bg-white-500 p-3 mt-4">
       <div className="flex justify-between w-full p-2 border-b-2 border-gray-100">
          <h3 className="font-semibold">Filters</h3>
          <div className="flex">
           <button className=" text-blue-500"
           onClick={() =>{Reset}}
           >Reset All
           </button>                                 
          </div> 
       </div>

       <div className="w-full mt-4 mb-4  border-b-2 border-gray-100">
       <h3 className="font-medium ml-4">LOCATION</h3>
       <div className="flex justify-between w-full ml-2 mb-6">
        <select
         id="location"
         value={showArea.place}
         onChange={handleChange}
         name="location"
         className="w-4/5 h-10 mt-1 mb-6 flex items-center cursor-default border-solid  border-gray-500 rounded-lg bg-white p-0 text-center shadow-md sm:text-sm border outline-none"
        >
         <option value="">--Select--</option>
         <option value="Sandton">Sandton</option>
         <option value="Kempton Park">Kempton Park</option>
         <option value="Midrand">Midrand</option>
         <option value="Lombardy">Lombardy</option>
         <option value="Edenvale">Edenvale</option>
         <option value="Germiston">Germiston</option>
        
        </select>
        </div>
       </div>

       <div className="w-full mt-4 mb-4  border-b-2 border-gray-100">
       <h3 className="font-medium ml-4">INDUSTRY</h3>
       <div className="flex justify-between w-full ml-2 mb-6">
        <select
         id="bodytype"
         value={showArea.industry}
         onChange={handleChange}
         name="bodytype"
         className="w-4/5 h-10 mt-1 mb-6 flex items-center cursor-default border-solid  border-gray-500 rounded-lg bg-white p-0 text-center shadow-md sm:text-sm border outline-none"
        >
         <option value="">--Select--</option>
         <option value="Mechanical">Mechanical Engineering</option>
         <option value="Chemical">Chemical Engineering</option>
         <option value="Architecture">Architecture</option>
         <option value="Industrial">Industrial Engineering</option>
         <option value="Structural">Structural Engineering</option>
         <option value="Mining">Mining Engineering</option>
        </select>
        </div>
       </div>

       
       
     </div> 

      <div className="flex flex-col w-3/4 ml-8 mt-4  border-solid  border-1 border-gray-100 rounded-lg bg-white-500 p-3">
         {filteredData.map((item) =>{
         return(
           <div>
             <div className="flex justify-between w-full p-2 border-b-2 border-gray-100" key={item.id}>
             <h2 className="font-medium text-base">Blufontain {item.name} carwash is located at {item.location}</h2>
            </div>

            <h3 className="ml-3 mt-2 text-sm">Physical Address: {item.address}</h3>
            <h3 className="ml-3 text-sm ">Contact: {item.phone}</h3>

            <div className='flex flex-col full border-solid border-2 border-gray-100 rounded-lg m-2 p-2 mb-4 bg-white-300 shadow-md hover:shadow-xl'>
             
             <iframe src={item.googleMaps} className='w-full h-[360px]'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

             <div className="w-full py-2 flex justify-between mt-4 text-lg text-black-600 font-medium">
               <p>{item.name}</p>
               {/* <p>{heroData.bodytype}</p>
               <p>R {Prices()}</p> */}
             </div>

             <button className=" w-1/4 px-3 py-3 text-sm font-normal hover:text-blue-400 hover:bg-white-300 border-2 border-blue-300 rounded-lg bg-blue-400 text-white-500" onClick={() =>showStepper(item)}>
               Book Now
             </button>
         </div>
           </div>
         )
       })}
    </div>
    </div>
    </div>
  )
}

export default index