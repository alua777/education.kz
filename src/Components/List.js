import { React, useState } from 'react'

import img from '../kids.png'
function List(props) {
    const data = [{
        "id": 1,
        "name": "Decimal Operations",
        "author": "Jane Cooper",
        "subject": "Mathematics",
        "grade": "5th Grade"
    }, {
        "id": 2,
        "name": "work",
        "author": "Alua",
        "subject": "Mathematics",
        "grade": "5th Grade"
    }, {
        "id": 3,
        "name": "Calculus 1",
        "author": "Einstein",
        "subject": "Mathematics",
        "grade": "11th Grade"
    }, {
        "id": 4,
        "name": "Bohemian Rhapsody",
        "author": "Freddy Mercury",
        "subject": "Music",
        "grade": "9th Grade"
    }, {
        "id": 5,
        "name": "Atlas",
        "author": "Columbus",
        "subject": "Geography",
        "grade": "6th Grade"
    }, {
        "id": 6,
        "name": "Decimal Operations",
        "author": "Jane Cooper",
        "subject": "Mathematics",
        "grade": "5th Grade"
    }, {
        "id": 7,
        "name": "Decimal Operations",
        "author": "Jane Cooper",
        "subject": "Mathematics",
        "grade": "5th Grade"
    }, {
        "id": 8,
        "name": "Decimal Operations",
        "author": "Jane Cooper",
        "subject": "Mathematics",
        "grade": "5th Grade"
    }, {
        "id": 9,
        "name": "Decimal Operations",
        "author": "Jane Cooper",
        "subject": "Mathematics",
        "grade": "5th Grade"
    }, {
        "id": 10,
        "name": "Decimal Operations",
        "author": "Jane Cooper",
        "subject": "Mathematics",
        "grade": "5th Grade"
    }] 
    const cardStyle = {
        marginTop: '30px',
        marginLeft: '35%',
        display: 'flex', 
        flexWrap: 'wrap',
        width: '800px',
        height: '262px',
        margin: '30px',
        border: '0.5px solid #000', // You can customize the border color
        borderRadius: '8px', // Adjust the border radius as needed
        padding: '30px 40px', // Padding values (top, right, bottom, left)
        boxSizing: 'border-box',
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
    //create a new array by filtering the original array
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().includes(props.input)
        }
    })
    return (
        <div style={{marginTop: "50px"}}>
            {filteredData.map((item) => (
                <div style={cardStyle} >
                    <div><img  src={img} alt="img"/></div>
                <div>
                <h3 key={item.id}>{item.name}</h3>
                <p key={item.id}>By {item.author} in {item.subject}, {item.grade}</p>
                <p>15 Downloads</p>
                </div>
                <div>
                    <div><button style={buttonStyle}>Free</button></div>
                </div>
                </div>
            ))}
        </div>
    )
}

export default List

