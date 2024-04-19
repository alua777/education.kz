import React, { useState } from 'react';
import { TextField, Button, TextareaAutosize, Input, Grid, Typography, Box, Card, CardContent } from '@mui/material';

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
  },
  card: {
    marginBottom: '20px',
  },
  inputField: {
    marginBottom: '20px',
    width: '100%',
  },
  descriptionField: {
    marginBottom: '20px',
    width: '100%',
    minHeight: '200px',
  },
  fileInputContainer: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fileInput: {
    display: 'none',
  },
  uploadButton: {
    float: 'right',
  },
};

const MyMaterials = () => {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [grade, setGrade] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile ? selectedFile.name : '');
  };

  const handleUpload = () => {
    // Handle file upload logic
    console.log('Title:', title);
    console.log('Subject:', subject);
    console.log('Grade:', grade);
    console.log('Description:', description);
    console.log('File:', file);
    // Reset state after upload
    setTitle('');
    setSubject('');
    setGrade('');
    setDescription('');
    setFile(null);
    setFileName('');
  };

  return (
    <div style={styles.container}>
      <Card style={styles.card}>
        <CardContent>
          <Typography variant="h4" gutterBottom>Create Materials</Typography>
          <TextField
            style={styles.inputField}
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            style={styles.inputField}
            label="Subject"
            variant="outlined"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <TextField
            style={styles.inputField}
            label="Grade"
            variant="outlined"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
          <TextField
            style={styles.descriptionField}
            label="Description"
            multiline
            rows={6}
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Grid container spacing={2} style={styles.fileInputContainer}>
            <Grid item xs={9}>
              <Input
                fullWidth
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                style={styles.fileInput}
                id="file-input"
              />
              <label htmlFor="file-input">
                <Button variant="contained" component="span">
                  Choose a file
                </Button>
              </label>
              <Typography variant="body1">{fileName}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Button variant="contained" color="primary" onClick={handleUpload} style={styles.uploadButton}>
        Upload
      </Button>
    </div>
  );
};

export default MyMaterials;
