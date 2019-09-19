import React from 'react';
import Pet from "./Pet.js";

const Friend = props => {
console.log(props)

    const mappedPets = props.pets.map(pet =>
                                    <Pet
                                        name={pet.name}
                                        breed={pet.breed}
                                        key={Math.random()}
                                    />)
        
        let chosenColor
        
        if(props.age % 2 === 0) {
            chosenColor = "indigoblue";
        } else {
            chosenColor = "firebrick";
        }
    
    return (
            <div className = "friend-container" style={{backgroundColor: chosenColor}}>
                <h4>{props.name}</h4>
                <h6>{props.age}</h6>
                <div>
                    <p>Pets: { mappedPets } </p>
                </div>
               
            </div>
    )
   
}
export default Friend
