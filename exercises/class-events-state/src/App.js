import React, { Component } from 'react'
// Functional Components => display component

// Class Components 
    // We use them if we need:
        // State
        // Lifecycle Methods

// State
    // This maintains data
    // We can change state and it will update the DOM automatically



class App extends Component {
    constructor(){
        super()
        this.state = {
            bgColor: "blue",
            radius: 0
        }
    }

    toggleColor = () => {
        this.setState({ 
            bgColor: this.state.bgColor === "blue" ? "red" : "blue"
        })
    }

    changeRadius = () => {
        this.setState({
            radius: this.state.radius === 0 ? 50 : 0
        })
    }

    render(){
        return (
            <div>
                <div style={{ 
                    width: 100,
                    height: 100,
                    backgroundColor: this.state.bgColor,
                    borderRadius: this.state.radius + "%"
                }}></div>
                <button onClick={this.toggleColor}>Toggle Color</button>
                <button onClick={this.changeRadius}>Radius</button>
            </div>
        )
    }
}

export default App