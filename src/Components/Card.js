import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import img from '../Assets/img.jpg';
import { Favorite as FavoriteIcon, DownloadRounded as DownloadRoundedIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const RatingContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const StarIcon = styled(GradeRoundedIcon)({
  color: '#FFD700', // Yellow color for filled star
  
});

const HalfStarIcon = styled(GradeRoundedIcon)({
  color: '#FFD700', // Yellow color for half star
  
  clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)', // Clip path for half star
});

const StarBorderIcon = styled(GradeRoundedIcon)({
  color: '#B0B0B0', // Gray color for outlined star
 
});

export default function RecipeReviewCard({ id, title, subject, grade, views, uploadedAt, verified, rating }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
     // Toggle favorite state
  };

  const favoriteColor = isFavorite ? red[500] : undefined;

  const handleDownload = () => {
    // Handle download functionality here
  };

  const navigate = useNavigate();
  
  const handleCard = () => {
    navigate(`/material/${id}`);
  };

  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < filledStars) {
      stars.push(<StarIcon key={i} />);
    } else if (hasHalfStar && i === filledStars) {
      stars.push(<HalfStarIcon key={i} />);
    } else {
      stars.push(<StarBorderIcon key={i} />);
    }
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="verified" style={{ visibility: verified ? 'visible' : 'hidden' }}>
            <CheckCircleIcon />
          </IconButton>
        }
        title={title}
        subheader={uploadedAt}
        onClick={handleCard}
      />
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt="Image"
      />
      <CardContent>
        <Typography variant="body1" color="text.primary">
          Subject: {subject}
        </Typography>
        <Typography variant="body1" color="text.primary">
          Grade: {grade}
        </Typography>
      </CardContent>

      <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <RatingContainer>
          {stars}
        </RatingContainer>
        </div>
        <div>
          <IconButton disableRipple>
          <Typography variant='body2'>{views} views</Typography>
          {/* <RemoveRedEyeRoundedIcon aria-label="views" /> */}
        </IconButton> 
          <IconButton aria-label="add to favorites" onClick={handleFavorite}>
          <FavoriteIcon sx={{ color: favoriteColor }} />
        </IconButton>
        <IconButton aria-label="download" onClick={handleDownload}>
          <DownloadRoundedIcon />
        </IconButton>
        
        </div>
        
        
        
      </CardActions>
    </Card>
  );
}