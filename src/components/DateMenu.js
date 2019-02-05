import React, { Component } from 'react'
import {connect} from 'react-redux'
import DatePicker from 'react-datepicker'
import { findFlightByDate } from '../actions/search';
import calendar from '../styling/img/calendar.png'
import "react-datepicker/dist/react-datepicker.css";


class DateMenu extends Component {
  state = {
    menuOpen: false
  }

  handleClick() {
    this.setState({
      menuOpen: true
    })
  }

  render() {
    const {findFlightByDate} = this.props
    const search = this.props.search
    console.log(this.props.search)
    return (
      <div>{!search.formatted && <div> <button>
        <DatePicker className="input input--date" 
                    selected={this.props.input} 
                    onChange={(e) => findFlightByDate(e)} 
                    onClick={this.handleClick} 
                    value={`select date`}/>
      </button></div>}

      {search.formatted && <div><button >
        <DatePicker className="input input--date" 
                    selected={this.props.input} 
                    onChange={(e) => findFlightByDate(e)} 
                    onClick={this.handleClick} 
                    value={search.formatted.split('-').reverse().join('-')}/>
      </button></div>}

      </div>
    )
  }
}

const mapStateToProps = state => ({
  search: state.search
})

export default connect(mapStateToProps, {findFlightByDate})(DateMenu)