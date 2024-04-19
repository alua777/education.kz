// Request.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Grid, MenuItem, Button, Typography, Select } from '@mui/material';
import json from './../Components/Request.json'

const subjects = ['Math', 'Biology'];
const mathThemes = ['Algebra', 'Geometry', 'Calculus'];
const biologyThemes = ['Botany', 'Zoology', 'Ecology'];
const languages = ['English', 'Russian', 'Kazakh'];
const templates = ['10 Questions', 'Quiz', 'Final'];

function Request() {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [requestList, setRequestList] = useState([]);
  const navigate = useNavigate();

  const handleSend = () => {
    const requestData = {
      id: requestList.length + 1, // Generate a unique ID for the request
      subject: selectedSubject,
      theme: selectedTheme,
      language: selectedLanguage,
      template: selectedTemplate
    };
    setRequestList([...requestList, requestData]);
  };

  const getThemes = () => {
    if (selectedSubject === 'Math') {
      return mathThemes;
    } else if (selectedSubject === 'Biology') {
      return biologyThemes;
    }
    return [];
  };

  const handleRequestClick = (id) => {
    navigate(`/request/${id}`);
  };

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Select Options
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
              <Select
                value={selectedSubject}
                onChange={(e) => {
                  setSelectedSubject(e.target.value);
                  setSelectedTheme('');
                }}
                fullWidth
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Select Subject
                </MenuItem>
                {subjects.map(subject => (
                  <MenuItem key={subject} value={subject}>{subject}</MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={6} md={3}>
              <Select
                value={selectedTheme}
                onChange={(e) => setSelectedTheme(e.target.value)}
                fullWidth
                displayEmpty
                disabled={!selectedSubject}
              >
                <MenuItem value="" disabled={!selectedSubject}>
                  Select Theme
                </MenuItem>
                {getThemes().map(theme => (
                  <MenuItem key={theme} value={theme}>{theme}</MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={6} md={3}>
              <Select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                fullWidth
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Select Language
                </MenuItem>
                {languages.map(language => (
                  <MenuItem key={language} value={language}>{language}</MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={6} md={3}>
              <Select
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(e.target.value)}
                fullWidth
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Select Template
                </MenuItem>
                {templates.map(template => (
                  <MenuItem key={template} value={template}>{template}</MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" onClick={handleSend} style={{ marginTop: '20px' }}>
            Send
          </Button>
        </CardContent>
      </Card>
      {requestList.map((requestData) => (
        <Card key={requestData.id} style={{ marginTop: '20px', cursor: 'pointer' }} onClick={() => handleRequestClick(requestData.id)}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Request {requestData.id}
            </Typography>
            <Typography variant="body1">
              Subject: {requestData.subject}
            </Typography>
            <Typography variant="body1">
              Theme: {requestData.theme}
            </Typography>
            <Typography variant="body1">
              Language: {requestData.language}
            </Typography>
            <Typography variant="body1">
              Template: {requestData.template}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default Request;
