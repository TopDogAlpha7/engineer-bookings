"use client";

import { useState, useMemo } from 'react';
import Popup from '../components/misc/Popup';
import Modal from '../components/misc/Modal';
import Image from 'next/image';
import Info from './misc/Info';
import RatingFilter from './Ratings';


import Person1 from "../public/assets/people-1.png";
import Person2 from "../public/assets/people-2.png";
import Person3 from "../public/assets/people-3.png";
import Person4 from "../public/assets/people-4.png";
import Ctech from "/public/assets/company/catech.jpg";
import Trio from "/public/assets/company/trio.jpg";
import Viva from "/public/assets/company/viva.jpg";
import Pro from "/public/assets/company/proprocess.png";
import Saica from "/public/assets/company/saica.jpg";
import MDS from "/public/assets/company/mdsarchitect.jpg";
import Cons from "/public/assets/company/consulmet.jpg";
import Link from 'next/link';



const HomePage = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [showInfo, setShowInfo] = useState(false)
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedWorkTypes, setSelectedWorkTypes] = useState([]);
  const [selectedCompanyTypes, setSelectedCompanyType] = useState('');
  const [showCompany, setShowCompany] = useState(false);
  const [showIndependent, setShowIndependent] = useState(false);
  const [showReq, setShowReq] = useState(false);
  

  


  const handleIndustryChange = (industry) => {
    const updatedSelectedIndustries = selectedIndustries.includes(industry)
      ? selectedIndustries.filter(
          (selectedIndustry) => selectedIndustry !== industry
        )
      : [...selectedIndustries, industry];

    setSelectedIndustries(updatedSelectedIndustries);
  };

  const handleJobTypeChange = (jobType) => {
    const updatedSelectedJobTypes = selectedJobTypes.includes(jobType)
      ? selectedJobTypes.filter((selectedJobType) => selectedJobType !== jobType)
      : [...selectedJobTypes, jobType];

    setSelectedJobTypes(updatedSelectedJobTypes);
  };

  const handleWorkTypeChange = (workType) => {
    const updatedSelectedWorkTypes = selectedWorkTypes.includes(workType)
      ? selectedWorkTypes.filter((selectedWorkType) => selectedWorkType !== workType)
      : [...selectedWorkTypes, workType];

    setSelectedWorkTypes(updatedSelectedWorkTypes);
  };


  const handleCompanyTypeChange = (company) => {
    const updatedtSelectedCompanyTypes = selectedCompanyTypes.includes(company)
    ? selectedCompanyTypes.filter((selectedCompanyType) => selectedCompanyType !== company)
    : [...selectedCompanyTypes, company]

    setSelectedCompanyType(updatedtSelectedCompanyTypes);
  }

  const handleCompanyCheckboxChange = (e) => {
    setShowCompany(e.target.checked);
  };

  const handleIndependentCheckboxChange = (e) => {
    setShowIndependent(e.target.checked);
  };


  const jobData = [
    {
      id: 1,
      image: Person1,
      name: 'Harvey Spector',
      area: 'Mutare',
      rate: 'R324',
      rating: 3,
      profession: 'Structural Engineer',
      email: 'janesmith@example.com',
      industry: 'Structural',
      jobType: 'Contract',
      workType: 'Build',
      companyType: "Independent"
    },
    {
      id: 2,
      image: Person2,
      name: 'Grace Washa',
      area: 'Johannesburg',
      rate:'R400',
      rating: 4,
      profession: 'Industrial Engineer',
      email: 'janesmith@example.com',
      industry: 'Structural',
      jobType: 'Contract',
      workType: 'Build',
      companyType: "Independent"
    },
    {
      id: 3,
      image: Person3,
      name: 'Mike Ross',
      area: 'Harare',
      rate: 'R524',
      rating: 4,
      profession: 'Architect',
      email: 'rosesithole@gmail.com',
      industry: 'Architect',
      jobType: 'Temporary',
      workType: 'Testing',
      companyType: "Independent"

    },
    {
      id: 4,
      image: Person4,
      name: 'Rose Sithole',
      area: 'Harare',
      rate: 'R500',
      rating: 5,
      profession: 'Architect',
      email: 'rosesithole@gmail.com',
      industry: 'Architect',
      jobType: 'Temporary',
      workType: 'Testing',
      companyType: "Independent"

    },
  ];


  const careerData = [
    {
      id: 1,
      image: Person4,
      name: 'Mike Long',
      area: 'Pretoria',
      rate: 'R324',
      profession: 'Architect',
      email: 'mikelong@gmail.com',
      industry: 'Architect',
      jobType: 'Contract',
      workType: 'Build',
      companyType: "Independent"
    },
    {
      id: 2,
      image: Person3,
      name: 'Grace Washa',
      area: 'Johannesburg',
      rate:'R400',
      profession: 'Industrial Engineer',
      email: 'janesmith@example.com',
      industry: 'Structural',
      jobType: 'Contract',
      workType: 'Build',
      companyType: "Independent"
    },
    {
      id: 3,
      image: Person2,
      name: 'Harvey Ross',
      area: 'Harare',
      rate: 'R524',
      profession: 'Architect',
      email: 'rosesithole@gmail.com',
      industry: 'Architect',
      jobType: 'Temporary',
      workType: 'Testing',
      companyType: "Independent"

    },
    {
      id: 4,
      image: Person1,
      name: 'Rose Sithole',
      area: 'Harare',
      rate: 'R500',
      profession: 'Architect',
      email: 'rosesithole@gmail.com',
      industry: 'Architect',
      jobType: 'Temporary',
      workType: 'Testing',
      companyType: "Independent"

    },
  ]

  const companies = [
    {
      id: 1,
      image: Ctech,
      name: "Catech Tambani Engineering Specialists",
      website: "https://catechtambani.co.za/",
      address: "12 Roller St, Spartan, Kempton Park, 1619",
      phone: '011 392 3718',
      industry: 'Chemical',
      Rating: "4.7 ⭐⭐⭐⭐ (60)",
      latitude: -26.112014524466,
      longitude: 28.185299687718725,
      companyType: "Company"
    },
    {
      id: 2,
      image: Trio,
      name: "Trio Engineering",
      website: "https://trioengineering.co.za/",
      address: "Unit 4, 18 Edendale Rd W, Eastleigh, Edenvale, 1609",
      phone: '011 392 3718',
      industry: 'Mechanical',
      Rating: "4.6 ⭐⭐⭐⭐ (47)",
      latitude: -26.131018668284483,
      longitude: 28.16212371062871,
      companyType: "Company"
    },
    {
      id: 3,
      image: Viva,
      name: "Viva Engineering",
      website: "https://vivaeng.co.za/",
      address: "68 Loper Ave, Spartan, Kempton Park, 1619",
      phone: '011 392 3718',
      industry: 'Structural',
      Rating: "4.2 ⭐⭐⭐⭐ (34)",
      latitude: -26.114925798782938,
      longitude: 28.203816780912735,
      companyType: "Company"
    },
    {
      id: 4,
      image: Pro,
      name: "ProProcess Engineering (Pty) Ltd.",
      website: "https://proprocesseps.com/",
      address: "7 Sam Green Rd, Tunney, Germiston, 1401",
      phone: '011 392 3718',
      industry: 'Chemical',
      Rating: "4.4 ⭐⭐⭐⭐ (50)",
      latitude: -26.151878835031816,
      longitude: 28.182647127245545,
      companyType: "Company"
    },
    {
      id: 5,
      image: Saica,
      name: "SAICE",
      website: "https://www.saice.org.za/",
      address: "Thornhill Office Park, Bekker Rd, Vorna Valley, Midrand, 1685",
      phone: '011 392 3718', 
      industry: 'Civil',
      Rating: "4.8 ⭐⭐⭐⭐ (67)",
      latitude: -26.00408408090166,
      longitude: 28.111170146725545,
      companyType: "Company"
    },
    {
      id: 6,
      image: MDS,
      name: "MDS Architecture",
      website: "https://www.mdsarch.co.za/",
      address: "4 Stan Rd, Morningside, Sandton, 2057",
      phone: '011 392 3718',
      industry: 'Architect',
      Rating: "4.3 ⭐⭐⭐⭐ (49)",
      latitude: -26.093052333429114,
      longitude: 28.053684939667924,
      companyType: "Company"
    },
    {
      id: 7,
      image: Cons,
      name: "Consulmet South Africa",
      website: "https://www.consulmet.com/",
      address: "South, 15 Friesland Dr, Longmeadow Business Estate, Johannesburg, 1644",
      phone: '011 392 3718',
      industry: 'Mining',
      Rating: "4.1 ⭐⭐⭐⭐ (27)",
      latitude: -26.10876094003099,
      longitude: 28.1361195083,
      companyType: "Company"
    }
  ]


  const filteredCompanies = companies.filter((company) =>
      (showCompany && company.companyType === 'Company') ||
      (showIndependent && company.companyType === 'Independent')
  );
  
    

  const filteredJobs = jobData.filter((job) => {
    if ((showCompany && job.companyType !== 'Company') ||
    (showIndependent && job.companyType !== 'Independent')
    ) {
      return false
    }
    if (
      selectedIndustries.length > 0 &&
      !selectedIndustries.includes(job.industry)
    ) {
      return false;
    }
    if (
      selectedJobTypes.length > 0 &&
      !selectedJobTypes.includes(job.jobType)
    ) {
      return false;
    }
    if (
      selectedWorkTypes.length > 0 &&
      !selectedWorkTypes.includes(job.workType)
    ) {
      return false;
    }
    return true;
  });

  const filteredCareer = careerData.filter((job) => {
    if ((showCompany && job.companyType !== 'Company') ||
    (showIndependent && job.companyType !== 'Independent')
    ) {
      return false
    }
    if (
      selectedIndustries.length > 0 &&
      !selectedIndustries.includes(job.industry)
    ) {
      return false;
    }
    if (
      selectedJobTypes.length > 0 &&
      !selectedJobTypes.includes(job.jobType)
    ) {
      return false;
    }
    if (
      selectedWorkTypes.length > 0 &&
      !selectedWorkTypes.includes(job.workType)
    ) {
      return false;
    }
    return true;
  });

  const handleRatingChange = (rating) => {
    if (selectedRatings.includes(rating)) {
      setSelectedRatings(selectedRatings.filter((r) => r !== rating));
    } else {
      setSelectedRatings([...selectedRatings, rating]);
    }
  };

  const filteredItems = jobData.filter((item) =>
    selectedRatings.length === 0 || selectedRatings.includes(item.rating)
  );


  return (
    <div className="bg-white-500 "
      id='filter'
    > 

      <div className="px-10">
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-1 w-fit">
        <div className="bg-white rounded-lg  text-center">

        <div className="border-2 border-gray-500 mt-40">
        <h2 className="text-3xl  font-medium leading-relaxed text-black-600 flex-nonwrap ">Filter By:</h2>
        </div>
        <div  className="border-6 border-gray-500 rounded-xl ">

        <div className="flex flex-col border-2 border-gray-500 p-10">
        <h3 className="text-2xl text-black-600 font-medium capitalize my-1 sm:my-7 ">Company Type</h3>
        <label className="text-xl text-black-100 capitalize space-x-7 flex items-center gap-4">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded"
            checked={showCompany}
            onChange={handleCompanyCheckboxChange}
          />
          Company
        </label>
        <label className="text-xl text-black-100 capitalize space-x-7 flex items-center gap-4">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded"
            checked={showIndependent}
            onChange={handleIndependentCheckboxChange}
          />
          Independent
        </label>
        </div>

        <div className="flex flex-col border-2 border-gray-500 p-10">
        <h3 className="text-2xl text-black-600 font-medium capitalize my-1 sm:my-7 ">Industry</h3>
        <label className="text-xl text-black-100 capitalize space-x-7 flex items-center gap-4">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded"
            checked={selectedIndustries.includes('Civil')}
            onChange={() => handleIndustryChange('Civil')}
          />
          Civil
        </label>
        <label className="text-xl text-black-100 capitalize space-x-7 flex items-center gap-4">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded "
            checked={selectedIndustries.includes('Structural')}
            onChange={() => handleIndustryChange('Structural')}
          />
          Structural 
        </label>

        <label className="text-xl text-black-100 capitalize space-x-7 flex items-center gap-4">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded "
            checked={selectedIndustries.includes('Mechanical')}
            onChange={() => handleIndustryChange('Mechanical')}
          />
         Mechanical
        </label>
        <label className="text-xl text-black-100 capitalize space-x-7 flex items-center gap-4">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded "
            checked={selectedIndustries.includes('Industrial')}
            onChange={() => handleIndustryChange('Industrial')}
          />
          Industrial
        </label>
        <label className="text-xl text-black-100 capitalize space-x-7 flex items-center gap-4">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded "
            checked={selectedIndustries.includes('Architect')}
            onChange={() => handleIndustryChange('Architect')}
          />
          Architect
        </label>
        <label className="text-xl text-black-100 capitalize space-x-7 flex items-center gap-4">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded "
            checked={selectedIndustries.includes('Chemical')}
            onChange={() => handleIndustryChange('Chemical')}
          />
         Chemical
        </label>
        </div>
        </div>

        <div className="flex flex-col border-2 border-gray-500 p-10">
        <h3 className="text-2xl text-black-600 font-medium capitalize my-2 sm:my-7 ">Job Type</h3>
        <label className="text-xl text-black-100 capitalize space-x-7 flex items-center gap-4">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded"
            checked={selectedJobTypes.includes('Permanent')}
            onChange={() => handleJobTypeChange('Permanent')}
          />
          Permanent
        </label>
        <label className="text-xl text-black-100 capitalize space-x-7 flex items-center gap-4">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded "
            checked={selectedJobTypes.includes('Temporary')}
            onChange={() => handleJobTypeChange('Temporary')}
          />
          Temporary
        </label>
        <label className="text-xl text-black-100 capitalize space-x-7 flex items-center gap-4">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded "
            checked={selectedJobTypes.includes('Contract')}
            onChange={() => handleJobTypeChange('Contract')}
          />
          Contract
        </label>
        <label className="text-xl text-black-100 capitalize space-x-7 flex items-center gap-4">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded "
            checked={selectedJobTypes.includes('Freelance')}
            onChange={() => handleJobTypeChange('Freelance')}
          />
          Freelance
        </label>
        </div>

        <div className="flex flex-col border-2 border-gray-500 p-10">
        <h3 className="text-2xl text-black-600 font-medium capitalize my-2 sm:my-7 ">Work Type</h3>
        <label className="text-xl text-black-100 capitalize space-x-7 flex items-center gap-4">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded "
            checked={selectedWorkTypes.includes('Build')}
            onChange={() => handleWorkTypeChange('Build')}
          />
          Build
        </label>
        <label className="text-xl text-black-100 capitalize space-x-7 flex items-center gap-4">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded "
            checked={selectedWorkTypes.includes('Design')}
            onChange={() => handleWorkTypeChange('Design')}
          />
          Design
        </label>
        <label className="text-xl text-black-100 capitalize space-x-7 flex items-center gap-4">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded "
            checked={selectedWorkTypes.includes('Production')}
            onChange={() => handleWorkTypeChange('Production')}
          />
          Production
        </label>
        <label className="text-xl text-black-100 capitalize space-x-7 flex items-center gap-4">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded "
            checked={selectedWorkTypes.includes('Testing')}
            onChange={() => handleWorkTypeChange('Testing')}
          />
          Testing
        </label>
        <label className="text-xl text-black-100 capitalize space-x-7 flex items-center gap-4">
          <input
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded cursor: pointer"
            checked={selectedWorkTypes.includes('Analysis')}
            onChange={() => handleWorkTypeChange('Analysis')}
          />
          Analysis
        </label>
        </div>
        <div className="flex flex-col border-2 border-gray-500 p-10">
          <RatingFilter 
            selectedRatings={selectedRatings}
            onRatingChange={handleRatingChange}
          />
         
        </div>
        <div className="flex flex-col border-2 border-gray-500 p-10">
          <Link href='/site-map'>
            <a>
            <button 
              className= "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-blue-500 hover:shadow-blue-md transition-all outline-none "
              
              >
              Site Map
          </button>
            </a>
            </Link>
        
        </div>
      </div>
      
      <div className=" mt-40 columns-2 flex flex-wrap">
        <div className="px-10 rounded-lg gap-2 w-fit ">
          {filteredCompanies.map((project) => (
            <div key={project.id} className="flex flex-col items-left border-2 border-black-100 rounded-xl py-4 px-6 lg:px-12 xl:px-20 gap-2 mb-4 ">
              <h3 className="text-2xl  font-medium text-blue-500 ">{project.name}</h3>
              <Image 
                src={project.image}
                alt="about us image"
                quality={100}
                width={412}
                height={283}
                className='hover: shadow-xl rounded-xl'
              />
              <p className='text-2xl'>
                <strong>Website:</strong> <a href={project.website} className='hover:text-blue-500'>{project.website}</a>
              </p>
              <p className='text-2xl'>
                <strong>Address:</strong> {project.address}
              </p>
              <p className='text-2xl'>
                <strong>Phone Number:</strong> {project.phone}
              </p>
              <p className='text-2xl'>
                <strong>Industry:</strong> {project.industry}
              </p>
              <div className='mt-4 columns-2'>
              <div className='w-fit h-full'>
                <Popup isVisible={showReq} onClose={() => setShowReq(false)}/>
              <button 
              className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-blue-500 text-blue-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-blue-500 hover:text-white-500 transition-all hover:shadow-blue "
                onClick={() => setShowReq(true)}
              >
              RFQ
          </button>
          
          <br></br>
          
          </div>
          
          {/* <Request isVisible={showReq} onClose={() => setShowReq(false)}>
             <div className="bg-gray-100 rounded-lg shadow-md p-10 w-59 ">
              <h2 className="text-3xl  font-medium text-black-600 text-center">Request For Quote(RFQ)</h2>
                <hr></hr>
                <h3 className="text-2xl  font-medium text-black-600 text-center">Quote for:</h3>
             </div>
          </Request> */}
          <p className="text-2xl  font-medium text-black-600 px-10">Rating: {project.Rating}</p>
          </div>
            </div>

          ))}

        </div>
        
      </div>
      

      <div className='mt-40 h-full'>
      <div className="columns-2">
      <div className="projects-page ">
        <div className="w-full h-full rounded-lg gap-2">
          
        {filteredJobs.map((job) => (
          <div className='flex '>
          <div key={job.id} className="border-2 border-gray-500 rounded-xl py-4 px-10 gap-4 mb-6 w-full h-full">
          <div className='flex'>
              <Image 
                src={job.image}
                alt="about us image"
                quality={100}
                width={100}
                height={100}
                
              />
              <div className='px-10'></div>
              <h2 className="text-2xl text-black-600 font-medium capitalize ">{job.rate}</h2>
              </div>
             
            <div className='columns-2 flex'>
            <h2 className="text-2xl text-black-600 font-medium capitalize space-x-7 flex items-center">{job.name}</h2>
            <div className='px-10'></div>
            <p className="text-2xl text-black-600 font-medium capitalize space-x-7 flex items-center">⭐({job.rating})</p>
            </div>
            
            
           
            <p className="text-xl text-gray-500 bg-opacity-25 font-medium capitalize space-x-7 flex items-center">
              {job.area}
            </p>
            <p>
              <strong>Profession:</strong> {job.profession}
            </p>
            <p>
              <strong>Email:</strong> {job.email}
            </p>
            <p className='mb-10'>
              <strong>Industry:</strong> {job.industry}
            </p>
            <div></div>
            <br></br>
            <div className='columns-2 flex '>
            <button 
              className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-blue-500 text-blue-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-blue-500 hover:text-white-500 transition-all hover:shadow-blue "
              onClick={() => setShowModal(true)}
              >
                Book
              </button>
              <div className='px-4'></div>
              <button 
              className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-blue-500 text-blue-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-blue-500 hover:text-white-500 transition-all hover:shadow-blue "
              onClick={() => setShowInfo(true)}
              >
                More Info
              </button>
              
              
          </div>
          </div>
          <div className='p-10'></div>
          </div>
        ))}
      </div>
      <div className="w-fit p-0 rounded-lg gap-2">
          
        {filteredJobs.map((job) => (
          <div className='flex w-full'>
          <div key={job.id} className="border-2 border-gray-500 rounded-xl py-4 px-10 gap-4 mb-6 w-full">
            <div className='flex'>
          <Image 
                src={job.image}
                alt="about us image"
                quality={100}
                width={100}
                height={100}
                
              />
              <div className='px-10'></div>
              <h2 className="text-2xl text-black-600 font-medium capitalize ">{job.rate}</h2>
            </div>

            <div className='columns-2'>
            <h2 className="text-2xl text-black-600 font-medium capitalize space-x-7 flex items-center">{job.name}</h2>
            <div className='px-10'></div>
            <p className="text-2xl text-black-600 font-medium capitalize space-x-7 flex items-center">⭐({job.rating})</p>
            </div>
            
            <p className="text-xl text-gray-500 bg-opacity-25 font-medium capitalize space-x-7 flex items-center">
             {job.area}
            </p>
            <p>
              <strong>Profession:</strong> {job.profession}
            </p>
            <p>
              <strong>Email:</strong> {job.email}
            </p>
            <p className='mb-10'>
              <strong>Industry:</strong> {job.industry}
            </p>
            
            <br></br>
            <div className='columns-2 flex '>
            <button 
              className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-blue-500 text-blue-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-blue-500 hover:text-white-500 transition-all hover:shadow-blue "
              onClick={() => setShowModal(true)}
              >
                Book
              </button>
              <div className='p-4'></div>
              <button 
              className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-blue-500 text-blue-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-blue-500 hover:text-white-500 transition-all hover:shadow-blue "
              onClick={() => setShowInfo(true)}
              
              >
                More Info
              </button>
        
              </div>
          </div>
          <div className='p-10'></div>
          </div>
        ))}
      </div>

      </div>
      </div>






      </div>
      </div>
      <div className="w-fit p-0 rounded-lg gap-2 mb-8">
      </div>
      </div>
      <div id="contact">
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}/>
        <Info isVisible={showInfo} onClose={() => setShowInfo(false)}>
                  {filteredJobs.map((job) => (
                    <div key={job.id} className="border-2 border-gray-500 rounded-xl px-4 gap-4 mb-4">
                      <h2 className="text-2xl text-black-600 font-medium capitalize space-x-7 flex items-center">{job.name}</h2>
                        <p>
                          <strong>Area:</strong> {job.area}
                        </p>
                        <p>
                          <strong>Job Type:</strong> {job.jobType}
                        </p>
                        <p>
                          <strong>Work Type:</strong> {job.workType}
                        </p>
                        <div className=' mb-4'></div>
                        <Link href='/qualifications'>
                          <a>
                          <button 
                          className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-blue-500 text-blue-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-blue-500 hover:text-white-500 transition-all hover:shadow-blue "
                            
                          >
                              Qualifications and Specialties
                          </button>
                          </a>
                        
                        </Link>
                        
                    </div>
                  ))}
              </Info>
    </div>
  );
};

export default HomePage;
