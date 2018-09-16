import React, { Component } from 'react';
import Box from "./Components/Box";
import './App.css';

class App extends Component {
    componentDidMount() {
        this.update()
    }
    componentDidUpdate() {
        setInterval(this.update, 1000)
    }
    update = () => {
        this.setState({
            date: new Date()
        })
    };
    getTime() {
        const { date } = this.state
        return {
            hour: date.getHours() > 12 ? date.getHours() - 12 : date.getHours(),
            minutes: date.getMinutes()
        };
    }
    render() {
        const { hour, minutes } = this.state ? this.getTime() : { hour: false, minutes: false };

        return (
            <div className="App container" >
                <div className="flexBox" >
                    {
                        [...Array(12)].map((x, i) => (
                            <Box
                                key={i} style={{ background: i === hour && 'none' }}
                                minutes={i === hour && minutes} i={i + 1}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default App;
