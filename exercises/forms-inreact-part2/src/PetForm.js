import React from 'react'

const PetForm = props => {
    const { handleChange, handleSubmit, petName, isFixed } = props

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="petName"
                value={petName}
                onChange={handleChange}
                placeholder="Pet Name"/>
            <br/>
            Is Fixed:
            <input 
                type="checkbox"
                name="isFixed"
                checked={isFixed}
                onChange={handleChange}/>
            <br/>
            Pet gender:
            Male: <input 
                type="radio"
                value="Male"
                name="gender"
                onChange={handleChange}/>
            Female: <input 
                type="radio"
                value="Female"
                name="gender"
                onChange={handleChange}/>
            <br/>
            Species:
            <select name="species" onChange={handleChange}>
                <option>---</option>
                <option value="Cat">Cat</option>
                <option value="Dog">Dog</option>
                <option value="Fish">Fish</option>
                <option value="Bird">Bird</option>
            </select>

            <button>Submit</button>
        </form>
    )
}

export default PetForm