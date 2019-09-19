import React from 'react';


const Pet = props => {
    return (
        <div className = "pet-container">
            <p>Pet Name: {props.name}</p>
            <p>Pet Breed: {props.breed}</p> 
        </div>            

    )
}
 
export default Pet 