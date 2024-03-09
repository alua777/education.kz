import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SearchBar = () => {
  const handleSearch = () => {
    // Perform search operation here
    console.log('Search button clicked');
    // For demonstration purposes, I'm just logging a message
  };

  return (
    <div style={{ display: 'flex', justifyContent:'space-around'}}>
      <TextField
        label="Search"
        variant="outlined"
        
        onInput={handleSearch}
        style={{ width:"90%", marginRight: '10px' }}
      />
      
    </div>
  );
};

export default SearchBar;
