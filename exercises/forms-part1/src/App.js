import React, { Component } from 'react'

class App extends Component {          //class needs State
    constructor(){
        super()
        this.state = {
            firstName: "",              //first name
            lastName: "",               //last name
            names: []                   //array of names
        }
    }

    handleChange = (event) => {                     //first & last name inputs
        // event.target.name & event.target.value
        this.setState({
            [event.target.name]: event.target.value  //the inputs are EVENTS or e
        })
    }

    handleSubmit = (event) => {                     //the SUBMIT button 
        event.preventDefault()                      //needed for the button 

        const newName = this.state.firstName + " " + this.state.lastName  //concats

        this.setState(prevState => ({                //preState is contrived. 
            names: [...prevState.names, newName],    // the ARRAY = existing names & newOnes
            firstName: "",
            lastName: ""
        }))
    }

    render(){
        const mappedNames = this.state.names.map((name, i) => <h1 key={i}>{name}</h1>)

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="firstName" 
                        value={this.state.firstName} 
                        onChange={this.handleChange}
                        placeholder="First Name"/>
                    <input 
                        type="text"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        placeholder="Last Name"/>
                    <button>Submit</button>
                </form>
                <div>
                    { mappedNames }
                </div>
            </div>
        )
    }
}

export default App