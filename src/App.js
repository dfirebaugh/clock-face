import React, { Component } from 'react';
import './App.css';

const Box = props => <div style={props.style} className="box">{props.minutes && <h1 className="minutes"> {props.minutes}</h1>}</div>;

class App extends Component {
    getTime() {
        const date = new Date(Date.now());
        return {
            hour: date.getHours() > 12 ? date.getHours() - 12 : date.getHours(),
            minutes: date.getMinutes()
        };
    }
    render() {
        const { hour, minutes } = this.getTime();

        return (
            <div className="App container">
                <div className="flexBox" >
                    {
                        [...Array(12)].map((x, i) => <Box style={{
                            background: i === hour && 'none'
                        }}
                            minutes={i === hour && minutes} i={i + 1}
                        />)
                    }

                </div>
            </div>
        );
    }
}

export default App;
