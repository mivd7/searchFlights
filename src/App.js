import React, { Component } from 'react'
import {Provider} from 'react-redux'
import {Route} from 'react-router-dom'
import './App.css'
import StartScreen from './components/StartScreen'
import FlightInfo from './components/FlightInfo'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>LuggageCare</h1>
          <Route path="/" exact component={StartScreen} />
          <Route path="/flights/:id" exact component={FlightInfo} />
        </header>
      </div>
      </Provider>
    );
  }
}

export default App;
