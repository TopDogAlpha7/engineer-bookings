import React from 'react';

const CompanyQualifications = ({ company }) => {
  return (
    <div className="px-40 rounded-lg gap-2 w-full ">
        <div className=" flex flex-col items-left border-2 border-black-100 rounded-xl py-4 px-6 lg:px-12 xl:px-20 gap-2 mb-4 ">
      <h2 className="text-3xl  font-medium text-blue-500 ">{company.name}</h2>
      <h3 className="text-2xl  font-medium text-black-500 ">Qualifications</h3>
      <ul>
        {company.qualifications.map((qualification, index) => (
          <li key={index}>{qualification} 🏅</li>
        ))}
      </ul>
      <h3 className="text-2xl  font-medium text-black-500 ">Specialties</h3>
      <ul>
        {company.specialties.map((specialty, index) => (
          <li key={index}>{specialty}</li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default CompanyQualifications;