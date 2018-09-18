import React, { Component } from "react";
import ElevenBoxes from "./Components/ElevenBoxes";
import SecondSweep from './Components/SecondSweep';
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { componentNum: 0, date: new Date() }
  }
  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  tick = () => {
    this.setState({
      date: new Date()
    });
  };
  getTime() {
    const { date } = this.state;
    const pad = n => (n < 10) ? ("0" + n) : n;
    return {
      hour: date.getHours() > 12 ? date.getHours() - 12 : date.getHours(),
      minutes: pad(date.getMinutes()),
      seconds: date.getSeconds()
    };
  }
  getComponent = num => {
    switch (num) {
      case 0:
        return <ElevenBoxes {...this.getTime()} />;
      case 1:
        return <SecondSweep {...this.getTime()} />;
      default:
        this.setState({ componentNum: 0 })
        return;
    }
  }
  dec = () => this.setState({ componentNum: this.state.componenNum - 1 })
  inc = () => this.setState({ componentNum: this.state.componentNum + 1 })
  render() {
    return (
      <div className="App container">
        <button onClick={this.dec}> prev </button>
        <button onClick={this.inc}> next </button>
        {this.state && this.getComponent(this.state.componentNum)}
      </div>
    );
  }
}

export default App;
