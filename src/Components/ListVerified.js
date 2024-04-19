import React from 'react';
import { Grid } from '@mui/material';
import Card from './Card';

const data = [
  { id: 1, title: 'Math 5 Grade', subject: 'Math', grade: '5 Grade', views: 3000, uploadedAt: 'September 14, 2016', verified: true, rating: 3 },
  { id: 2, title: 'Biology 6 Grade', subject: 'Biology', grade: '6 Grade', views: 2500, uploadedAt: 'October 20, 2016', verified: false, rating: 3 },
  { id: 3, title: 'Math 5 Grade', subject: 'Math', grade: '5 Grade', views: 3000, uploadedAt: 'September 14, 2016', verified: true, rating: 3 },
  { id: 4, title: 'Biology 6 Grade', subject: 'Biology', grade: '6 Grade', views: 2500, uploadedAt: 'October 20, 2016', verified: false, rating: 3 },
  { id: 5, title: 'Math 5 Grade', subject: 'Math', grade: '5 Grade', views: 3000, uploadedAt: 'September 14, 2016', verified: true, rating: 3 },
  { id: 6, title: 'Biology 6 Grade', subject: 'Biology', grade: '6 Grade', views: 2500, uploadedAt: 'October 20, 2016', verified: false, rating: 3 }
];

function List() {
  return (
    <Grid container spacing={5}>
      {data.map(item => (
        item.verified && (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              title={item.title}
              subject={item.subject}
              grade={item.grade}
              views={item.views}
              uploadedAt={item.uploadedAt}
              verified={item.verified}
              rating={item.rating}
            />
          </Grid>
        )
      ))}
    </Grid>
  );
}

export default List;
