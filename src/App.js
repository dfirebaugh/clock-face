import React, { Component } from "react";
import ElevenBoxes from "./Components/ElevenBoxes";
import SecondSweep from './Components/SecondSweep';
import CanvasClock from './Components/CanvasClock';
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
        return (
            <div className="App container">
                <button onClick={this.inc}> change </button>
                {this.state && this.getComponent(this.state.componentNum)}
            </div>
        );
    }
}

export default App;
