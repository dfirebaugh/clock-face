import React from "react";

const Box = props => {
    const Minutes = () => <h1 className="minutes"> {props.minutes}</h1>
    return (
        <div style={props.style} className="box">
            {props.minutes && <Minutes />}
        </div>);
}


export default Box; 