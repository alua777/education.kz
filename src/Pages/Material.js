import img from './../Assets/kids.png'
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Button, CardMedia, Grid, CardHeader, Divider } from '@mui/material'; // Import CardMedia, Grid, CardHeader, Divider
import worksheet from './../Components/Worksheets.json'
function Material() {
  const { value } = useParams();
  const materials = worksheet;
  
  // Dummy review data
  const dummyReviews = [
    { comment: "Great worksheet!", user: "User1", rating: 5 },
    { comment: "Very helpful!", user: "User2", rating: 4 },
    { comment: "Could be better.", user: "User3", rating: 3 },
  ];

  const handleDownloadPDF = () => {
    // Logic for downloading PDF
  };

  return (
    <div style={{ marginTop: '20px' }}> {/* Add space above the card */}
      <Card>
        <Grid container>
          <Grid item xs={4}>
            <CardMedia
              component="img"
              height="140" // Set height as needed
              image={img} // Image placeholder
              alt="Image Placeholder"
            />
          </Grid>
          <Grid item xs={8}>
            <CardContent>
              <Typography variant="h5" component="h2">
              {materials.at(value - 1).name}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                Author: {materials.at(value - 1).author}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                Grade: {materials.at(value - 1).grade}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                Subject: {materials.at(value - 1).subject}
              </Typography>
              <Typography variant="body2" component="p">
                {/* Worksheet Description */}
              </Typography>
              <Button variant="contained" onClick={handleDownloadPDF} style={{ marginTop: '20px' }}>Download PDF</Button>
            </CardContent>
          </Grid>
        </Grid>
      </Card>

      {/* Add space between the reviews and the card */}
      <div style={{ marginTop: '20px' }}>
        {/* Reviews */}
        <Card style={{ width: '100%' }}>
          <CardHeader title="Reviews" />
          <Divider />
          <CardContent>
            {dummyReviews.map((review, index) => (
              <div key={index} style={{ marginBottom: '10px' }}>
                <Typography variant="body1" gutterBottom>
                  {review.comment}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  By: {review.user}
                </Typography>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Material;
