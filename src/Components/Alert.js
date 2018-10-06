import React, { Component } from "react";

class Alert extends Component {
  state = {
  	style : {
  		background: this.props.backgroundColor,
  		color: this.props.fontColor
  	},
  	timedOut : false
  }

  componentDidMount() {
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