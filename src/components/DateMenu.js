import React, { Component } from 'react'
import {connect} from 'react-redux'
import DatePicker from 'react-datepicker'
import { findFlightByDate } from '../actions/search';
import "react-datepicker/dist/react-datepicker.css";

class DateMenu extends Component {
  // state = {
  //   date: new Date()
  // }

  render() {
    console.log(this.props)
    const {findFlightByDate} = this.props
    return (
      <div>
        <DatePicker value="select date" selected={this.props.input} onChange={(e) => findFlightByDate(e)} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  search: state.search
})

export default connect(mapStateToProps, {findFlightByDate})(DateMenu)