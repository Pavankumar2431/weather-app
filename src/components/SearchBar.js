import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city) onSearch(city);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
