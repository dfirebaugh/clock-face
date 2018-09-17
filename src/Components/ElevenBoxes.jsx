import React from "react";
import Box from "./Box";
import Theme from '../Themes/Theme';


const tempStyle = `
.box {
    display: grid;
    width: 20vw;
    height: 20vh;
}
.box-background{
    background: ${Theme.primary.color};
}
.wrapper {
    margin-left: 5vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1vw;
    row-gap: 7px;
    grid-auto-rows: 22vh;
    width: 80%;
    height: 70%;
}
.minutes {
    color: ${Theme.primary.contrastText};
    font-size: calc( 55px + 8 * (100vw - 400px) / 400 );
    place-self: center;
}
    `

const ElevenBoxes = props => {
    const { hour, minutes } = props;
    const clickHandler = e => console.log(e.target)

    return (
        <div className='wrapper'>
            {[...Array(12)].map((x, i) => (
                <Box
                    key={i}
                    hasBackground={i + 1 !== hour && 'box-background'}
                    clickHandler={clickHandler}
                    minutes={i + 1 === hour && minutes}
                    i={i + 1}
                />
            ))}
            <style jsx> {tempStyle} </style>
        </div>
    );
};

export default ElevenBoxes;
