import React, { useState } from 'react';
//! Style 
import "../style/Component.styled/Search.scss";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = () => {
    onSearch(searchTerm.toLowerCase());
  };   

  return (
    <div className='search'>
      <input
        type="text"
        placeholder="Kategori arayın..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Ara</button>
    </div>
  )
}

export default Search;