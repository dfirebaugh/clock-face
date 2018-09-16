import React from "react";

const Minutes = props => <h1 className="minutes"> {props.minutes}</h1>

const Box = props => (
    <div style={props.style} className="box">
        <Minutes {...props} />
    </div>
);



export default Box; 