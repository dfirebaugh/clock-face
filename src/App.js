import React, { Component } from 'react';
import ElevenBoxes from './Components/ElevenBoxes';
import './App.css';

class App extends Component {
    componentDidMount() {
        this.timer = setInterval(this.tick, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    tick = () => {
        this.setState({
            date: new Date()
        });
    };
    getTime() {
        const { date } = this.state
        return {
            hour: date.getHours() > 12 ? date.getHours() - 12 : date.getHours(),
            minutes: date.getMinutes()
        };
    }
    render() {
        return (
            <div className="App container" >
                {this.state && <ElevenBoxes {...this.getTime()} />}
            </div>
        );
    }
}

export default App;
