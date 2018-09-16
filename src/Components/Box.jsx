import React from "react";

const Minutes = props => <h1 className="minutes"> {props.minutes}</h1>

const Box = props => {
    return (
        <div style={props.style} className="box">
            {props.minutes && <Minutes {...props} />}
        </div>);
}


export default Box; 