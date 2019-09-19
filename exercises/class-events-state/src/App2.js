import React, { Component } from 'react'
import Controls from './Controls.js'
import UserList from './UserList.js'
// Caveats
    // complex data types in state
    // binding "this"

// Modularize your display
    // Controls
    // UserList
    // User

class App2 extends Component {
    constructor(){
        super()
        this.state = {
            users: [
                {name: "birdperson" }, 
                {name: "rick" }, 
                {name: "morty" }, 
                {name: "beth" }
            ]
        }
    }
    
    addJerry = () => {
        this.setState(prevState => ({
            users: [...prevState.users, {name: "jerry"}]
        }))
    }

    sayName = (name) => {
        alert(`Hi I am ${name}!`)
    }

    render(){
        return (
            <div>
                <UserList 
                    users={this.state.users}
                    sayName={this.sayName}/>
                <Controls 
                    addJerry={this.addJerry}/>
            </div>
        )
    }
}


export default App2