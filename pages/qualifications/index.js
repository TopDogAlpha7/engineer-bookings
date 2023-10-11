import React from 'react';
import CompanyQualifications from '/components/Qualifications';

const companies = [
  {
    id: 1,
    name: 'Harvey Spector',
    qualifications: ['Certified Structural Engineer', 'Project Management Professional'],
    specialties: ['Rebuilds & Repair', 'Project Management', 'Consultation', 'Engineering and Structural Design'],
  },
  {
    id: 2,
    name: 'Grace Washa',
    qualifications: ['Project Management Professional', 'Design Certification', 'Certified Industrial Engineer'],
    specialties: ['Consultation', 'Design', 'Project Management', 'Engineering and Structural Design'],
  },
  {
    id: 3,
    name: 'Mike Ross',
    qualifications: ['Certified Architect', 'Project Management Professional'],
    specialties: ['Project Management', 'Consultation', 'Structural Design'],
  },
  {
    id: 4,
    name: 'Rose Sithole',
    qualifications: ['Certified Chemical Engineer', 'Project Management Professional'],
    specialties: ['Plant Design', 'Product Design', 'Project Management', 'Consultation'],
  }
];

const App = () => {
  return (
    <div className="App">
      <h1 className="text-3xl  font-medium leading-relaxed text-black-600 text-center mb-20 ">Qualifications And Specialties</h1>
      {/* Your other content */}
      {companies.map((company, index) => (
        <CompanyQualifications key={index} company={company} />
      ))}
    </div>
  );
};

export default App;