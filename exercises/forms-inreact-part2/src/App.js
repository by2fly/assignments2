import React, { Component } from 'react'
import PetForm from './PetForm.js'
import Pet from './Pet.js'

// state inputs
// handleChange
// handleSubmit

// form, input, button
// input: value, name, onChange
// form: onSubmit

class App extends Component {
    constructor(){
        super()
        this.state = {
            petName: "",
            isFixed: false,
            gender: "",
            species: "",
            petsArray: []
        }
    }

    handleChange = event => {
        const value = event.target.type === "checkbox" ? 
                            event.target.checked
                            : event.target.value
        this.setState({
            [event.target.name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const newPet = {
            petName: this.state.petName,
            isFixed: this.state.isFixed,
            species: this.state.species,
            gender: this.state.gender
        }

        this.setState(prevState => ({
            petsArray: [...prevState.petsArray, newPet],
            petName: "",
            isFixed: false,
            species: "",
            gender: ""
        }))
    }

    render(){
        return (
            <div>
                <PetForm 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    petName={this.state.petName}
                    isFixed={this.state.isFixed}
                />
                <div>
                    { this.state.petsArray.map((pet, i) =>  <Pet {...pet} key={i}/>) }
                </div>
            </div>
        )
    }
}

export default App