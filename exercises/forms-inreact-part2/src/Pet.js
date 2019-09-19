import React from 'react'

const Pet = props => {
    const { petName, species, gender, isFixed } = props
    return (
        <div style={{border: "1px solid black", padding: 5, margin: 5}}>
            <h1>Name: {petName}</h1>
            <p>Species: {species}</p>
            <p>Gender: {gender}</p>
            <p>Fixed: {isFixed.toString()}</p>
        </div>
    )
}

export default Pet