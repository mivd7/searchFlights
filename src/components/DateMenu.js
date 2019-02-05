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
    return (
      <div>
      <button >
        <DatePicker className="input input--date" 
                    value="Select date" 
                    selected={this.props.input} 
                    onChange={(e) => findFlightByDate(e)} 
                    onClick={this.handleClick} />
      </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  search: state.search
})

export default connect(mapStateToProps, {findFlightByDate})(DateMenu)