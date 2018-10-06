import React, { Component } from "react";

class Alert extends Component {
  state = {
  	style : {
  	  		background: '',
  	  		color: ''
  	  	},
  	timedOut : false
  }

  setHolidayColors = (holiday) => {

  	switch (holiday) {
      case 'Halloween':
	    this.setState({ style : { background: 'orange', color: 'black'}})
        return
      case 'Thanksgiving':
	    this.setState({ style : { background: 'brown', color: 'yellow'}})
        return
      default:
	    this.setState({ style : { background: 'white', color: 'black'}})
        return
    }

  }

  componentDidMount() {
  	this.setHolidayColors(this.props.holiday)

  	setTimeout(() => {
  		this.setState({ timedOut : true})
  	}, this.props.timeout)
  }

  render() {
  	return(
  	  <div>
  	  	{ this.state.timedOut === false &&
  	  	<div className='holiday-alert' style={this.state.style}>Happy {this.props.holiday}!</div>
  	  	}
  	  </div>
  	)
  }
}

export default Alert