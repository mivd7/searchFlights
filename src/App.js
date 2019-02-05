import React, { Component } from 'react'
import {Provider} from 'react-redux'
import {Route} from 'react-router-dom'
import './styling/sass/App.scss'
import StartScreen from './components/StartScreen'
import MatchList from './components/SearchResults'
import FlightInfo from './components/FlightInfo'
import store from './store'
import logo from './logo.svg'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <html>
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet"/>
      </head>

      <body>
      <div>
        <header className="header">
          <div className="header__logo-box">
            <img src={logo} alt="logo" className="header__logo" /> 
          </div>
          <div className="header__text-box">
            <Route path="/" exact component={StartScreen}/>
            <Route path="/flights" exact component={MatchList} />
            <Route path="/flights/:id" exact component={FlightInfo} />
          </div>
        </header>
        <main className="main main--right">
        nice background
        </main>
      </div>
      </body>
      </html>
      </Provider>
    );
  }
}

export default App;
