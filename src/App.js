import React, { Component } from 'react'
import {Provider} from 'react-redux'
import {Route, Link} from 'react-router-dom'
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

        {/* <link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet"/>       */}
      </head>

      <body>
      <div>
        <header className="header">
          <div className="header__logo-box">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="header__logo"/> 
          </Link>
          </div>
          <div className="main">
            <Route path="/" exact component={StartScreen}/>
            <Route path="/flights" exact component={MatchList} />
            <Route path="/flights/:id" exact component={FlightInfo} />
          </div>
      </header>
      </div>
      <footer className="footer">

        <iframe title="theBeatles" width="500" height="300" src="https://www.youtube.com/embed/nS5_EQgbuLc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br/> © MIVD Web Development, 2019
      </footer>
      </body>
      </html>
      </Provider>
    );
  }
}

export default App;