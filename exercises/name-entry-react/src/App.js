import React, { Component } from 'react';


class App extends Component {
  constructor(){
    super();
    this.state = {
      fullName: "",
      names: []
    };
  }
  handleChange = (event)=> {
    this.setState({
        fullName: event.target.value

    })
    
  }
  handleSubmit = (event)=> {
    event.preventDefault()
    const newName = this.state.fullName
    this.setState(prevState => ({
      names: [...prevState.names, newName],
      fullName: ""
    }))
  }



  render(){

    const mappedNames = this.state.names.map(name => <h3>{name}</h3>)

    return (
      <div className="App">
        <h1>Name Entry</h1>
          
        <form onSubmit={this.handleSubmit}>
            <input type="text" 
              name="fullName" 
              value={this.state.fullName} 
              onChange={this.handleChange}/>
          <button>Submit</button>

        </form>
        <div>{ mappedNames }</div>
      </div>
    );
  }
}
export default App;
