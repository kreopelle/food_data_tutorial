import React from 'react';
import SoundsContainer from './SoundsContainer.js'
import CreateSoundContainer from './CreateSoundContainer.js'
import Navigation from '../components/Navigation.js'
import Home from '../components/Home.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchSounds } from '../actions/SoundActions'

class App extends React.Component {
  componentDidMount(){
    this.props.fetchSounds()
  }

  render(){
    return(
      <Router>
        <div>
          <Navigation />
          <Route path="/sounds/new" component={CreateSoundContainer} />
          <Route exact path="/sounds" component={SoundsContainer} />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    )
  }
}

export default connect(null, { fetchSounds })(App);
