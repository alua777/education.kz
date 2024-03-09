import { React, useState } from 'react'
import Worksheets from './Worksheets.json'
import img from '../Assets/img.jpg'
import { Link, withRouter } from 'react-router-dom'
function List(props) {

    const data = Worksheets
    
    const cardStyle = {
        marginBottom: '40px',
        
        display: 'flex', 
        color: 'black',
        width: '700px',
        height: '262px',
        
        border: '0.5px solid #b2bac8', // You can customize the border color
        borderRadius: '8px', // Adjust the border radius as needed
        padding: '30px 40px', // Padding values (top, right, bottom, left)
        boxSizing: 'border-box',
        
        gap: '40px', // Gap between child elements
        
      };
      const buttonStyle = {
        width: '77px',
        height: '44px',
        padding: '8px 16px', // Adjust the padding as needed
        margin: '5px', // Gap between elements
        backgroundColor: 'green', // Set the background color to your preference
        color: '#fff', // Set the text color to your preference
        border: '1px solid #0073e6', // Customize the border color if desired
        borderRadius: '4px', // Adjust the border radius as needed
        cursor: 'pointer', // Add a pointer cursor for interaction
        marginBottom: '80px',
        marginRight: '-5px'
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
        marginRight: '-5px',
        marginBottom: '-5px'
      };
    //create a new array by filtering the original array

    return (
        <div style={{}}>
            {data.map((item) => (
                <div style={cardStyle} >
                    <div style={{width: '350px'}}><img  src={img} alt="img" style={{width: "100%", height:"100%", borderRadius:"3%"}}/>
                </div>
                <div>
                    <h3 key={item.id}><Link to={`/worksheets/${item.id}`}>{item.name}</Link></h3>
                    <p key={item.id}>By <Link to={`/authors/${item.id}`}>{item.author}</Link> in <Link to={`/category/${item.subject}`}>{item.subject}</Link>, {item.grade}</p>
                    <p>15 Downloads</p>
                </div>
                <div>
                    <div><button style={buttonStyle}>Free</button></div>
                    <div ><Link to={`/worksheets/${item.id}`}><button style={buttonStyle1}> View </button></Link></div>
                </div>
                </div>
            ))}
        </div>
    )
}

export default List

