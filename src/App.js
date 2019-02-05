import React, { Component } from 'react'
import {Provider} from 'react-redux'
import {Route} from 'react-router-dom'
import './styling/sass/App.scss'
import StartScreen from './components/StartScreen'
import FlightInfo from './components/FlightInfo'
import store from './store'
import logo from './logo.svg'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-left">
          <img src={logo} alt="logo" />
          <Route path="/" exact component={StartScreen} />
          <Route path="/flights/:id" exact component={FlightInfo} />
        </header>
      </div>
      </Provider>
    );
  }
}

export default App;
