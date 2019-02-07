import React, { Component } from 'react'
import {Provider} from 'react-redux'
import {Route, Link} from 'react-router-dom'
import './styling/sass/App.scss'
import StartScreen from './components/StartScreen'
import FlightInfo from './components/FlightInfo'
import store from './store'
import logo from './logo.svg'
import SearchContainer from './components/SearchContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <header className="header">
          <div className="header__logo-box">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="header__logo"/> 
          </Link>
          </div>
          <div className="main">
            <Route path="/" exact component={StartScreen}/>
            {/* <Route path={`/q?${this.props.location.search}`} exact component={SearchContainer} /> */}
            <Route path="/flights/:id" exact component={FlightInfo} />
          </div>
      </header>
      </div>
      <footer className="footer">

        <iframe title="theBeatles" width="500" height="300" src="https://www.youtube.com/embed/nS5_EQgbuLc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br/> © MIVD Web Development, 2019
      </footer>
      </Provider>
    );
  }
}

export default App;