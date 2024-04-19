import { React, useState } from 'react';
import Worksheets from './Worksheets.json';
import img from '../Assets/img.jpg';
import { Link, withRouter } from 'react-router-dom';
import { TextField, Select, MenuItem, Button } from '@mui/material';
import { Menu, Search } from '@mui/icons-material';

function Filter() {
    const [searchText, setSearchText] = useState('');
    const [selectedGrade, setSelectedGrade] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('');

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleGradeChange = (event) => {
        setSelectedGrade(event.target.value);
    };

    const handleSubjectChange = (event) => {
        setSelectedSubject(event.target.value);
    };

    const handleSearch = () => {
        // Handle search functionality here
        console.log('Search text:', searchText);
        console.log('Selected grade:', selectedGrade);
        console.log('Selected subject:', selectedSubject);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <TextField
                label="Search"
                variant="outlined"
                value={searchText}
                onChange={handleSearchChange}
                InputProps={{ startAdornment: <Search /> }}
                style={{ width: '70%' }}
            />
            <Select value={selectedGrade} onChange={handleGradeChange} displayEmpty>
                <MenuItem value="" disabled>
                    Grade
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                {/* Add more grades as needed */}
            </Select>
            <Select value={selectedSubject} onChange={handleSubjectChange} displayEmpty>
                <MenuItem value="" disabled>
                    Subject
                </MenuItem>
                <MenuItem value="Biology">Biology</MenuItem>
                <MenuItem value="Art">Art</MenuItem>
                <MenuItem value="Math">Math</MenuItem>
                {/* Add more subjects as needed */}
            </Select>
            <Button variant="contained" onClick={handleSearch} style={{ backgroundColor: '#23A6F0', color: 'white', padding: '10px 20px', fontSize: '16px', borderRadius: '5px' }}>Search</Button>
        </div>
    );
}

export default Filter;