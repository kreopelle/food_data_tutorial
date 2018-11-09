import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sounds: "",
    }
    // gives access to "this" to change state with getSounds()
    this.getSounds = this.getSounds.bind(this)
  }

  getSounds() {
    fetch("/api/sounds")
    .then(resp => resp.json())
    .then(sounds => this.setState({
      // would like to push each record as indiv objects to a sounds array
      sounds: JSON.stringify(sounds)
    }
    ))
  }

  render() {
    return (
      <div className='App'>
        <h1>Sounds</h1>
        <form>
          <label htmlFor="email">Email: </label>
          <br />
          <input
            name="email"
            id="email"
            type="email"
          />
          <br /><br />
          <label htmlFor="password">Password: </label>
          <input
            name="password"
            id="password"
            type="password"
          />
        </form>

        <button onClick={this.getSounds}>Get Sounds</button>
        <p>{this.state.sounds}</p>
      </div>
    );
  }
}

export default App;
