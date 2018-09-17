import React from "react";


const Minutes = props => (
    <h1 className="minutes">
        {props.minutes}
    </h1>
);

const Box = props => {
    return (
        <div onClick={props.clickHandler} className={`${props.hasBackground} box`}>
            <Minutes {...props} />
        </div>
    );
};

export default Box;
