import React, { useState } from 'react';
import SortingDropdown from '../components/misc/Sorting';

const projects = [
  { title: 'Project A', date: '2022-03-15' },
  { title: 'Project B', date: '2021-12-10' },
  { title: 'Project C', date: '2022-06-01' },
];

const App = () => {
  const [sortOption, setSortOption] = useState('date'); // Default sorting option

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const sortedProjects = [...projects].sort((a, b) => {
    if (sortOption === 'title') {
      return a.title.localeCompare(b.title);
    } else if (sortOption === 'date') {
      return new Date(a.date) - new Date(b.date);
    }
  });

  return (
    <div className="App">
      <h1>Your Website Title</h1>
      {/* Your other content */}
      <SortingDropdown
        options={[
          { value: 'title', label: 'Title' },
          { value: 'date', label: 'Date' },
        ]}
        selectedOption={sortOption}
        onSelect={handleSortChange}
      />
      <ul>
        {sortedProjects.map((project) => (
          <li key={project.title}>{project.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;