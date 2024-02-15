
import React from 'react';
import img from '../kids.png'
const Card = () => {
  const cardStyle = {
    width: '825px',
    height: '262px',
    position: 'absolute',
    maring: '30px',
    border: '1px solid grey', // You can customize the border color
    borderRadius: '8px', // Adjust the border radius as needed
    padding: '30px 40px', // Padding values (top, right, bottom, left)
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '30px', // Gap between child elements
    
  };
  const buttonStyle = {
    width: '77px',
    height: '44px',
    padding: '8px 16px', // Adjust the padding as needed
    margin: '5px', // Gap between elements
    backgroundColor: '#23A6F0', // Set the background color to your preference
    color: '#fff', // Set the text color to your preference
    border: '1px solid #0073e6', // Customize the border color if desired
    borderRadius: '4px', // Adjust the border radius as needed
    cursor: 'pointer', // Add a pointer cursor for interaction
    marginBottom: '68px'
  };
  const buttonStyle1 = {
    width: '77px',
    height: '44px',
    padding: '8px 16px', // Adjust the padding as needed
    margin: '5px', // Gap between elements
    backgroundColor: '#23A6F0', // Set the background color to your preference
    color: '#fff', // Set the text color to your preference
    border: '1px solid #0073e6', // Customize the border color if desired
    borderRadius: '4px', // Adjust the border radius as needed
    cursor: 'pointer', // Add a pointer cursor for interaction
  };


  return (
    <div style={cardStyle}>
      <div><img src={img} alt="img"/></div>
        
        <div>
          <h3></h3>
          <p>By Jane Cooper in Mathematics, 5th Grade</p>
          <p>15 Downloads</p>
        </div>
        <div>
          <div><button style={buttonStyle}>Free</button></div>
          <div><button style={buttonStyle1}>View</button></div>
        </div>
        
    </div>
  );
};

export default Card;