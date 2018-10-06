import React, { Component } from "react";
import Alert from "./Components/Alert";
import ElevenBoxes from "./Components/ElevenBoxes";
import SecondSweep from './Components/SecondSweep';
import CanvasClock from './Components/CanvasClock';
import Theme from './Themes/Theme';
import "./App.css";
import moment from 'moment'

class App extends Component {
  constructor() {
    super();
    this.state = { componentNum: 0, date: new Date(), alert: false }
  }
  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tick = () => {
    const date = new Date()
    const alert = moment(date).isSame('2018-10-31', 'month', 'day')
    this.setState({
      date,
      alert
    });
  };
  getTime() {
    const { date } = this.state;
    const pad = n => (n < 10) ? ("0" + n) : n;
    const hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    return {
      hour: hour === 0 ? 12 : hour,
      minutes: pad(date.getMinutes()),
      seconds: date.getSeconds()
    };
  }
  getComponent = num => {
    switch (num) {
      case 0:
        return <CanvasClock {...this.getTime()} />
      case 1:
        return <ElevenBoxes {...this.getTime()} />;
      case 2:
        return <SecondSweep {...this.getTime()} />;
      default:
        this.setState({ componentNum: 0 })
        return;
    }
  }
  inc = () => this.setState({ componentNum: this.state.componentNum + 1 })
  render() {
    const buttonStyle = {
      background: Theme.secondary.color,
      color: Theme.secondary.contrastText,
      borderRadius: 70,
      height: 130,
      fontSize: 35,
      marginBottom: 12,
      border: {
        color: Theme.secondary.contrastText,
        width: 5,
        style: 'solid'
      }

    }

    return (
      <div>
        {this.state.alert === true &&
          <Alert holiday='Halloween' backgroundColor="orange" fontColor="black" timeout="5000"/>
        }
        <div className="App container">
          <button style={buttonStyle} onClick={this.inc} >
            change
          </button>
          {this.state && this.getComponent(this.state.componentNum)}
        </div>

      </div>
    );
  }
}

export default App;
