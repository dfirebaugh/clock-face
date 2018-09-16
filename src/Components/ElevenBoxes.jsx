import React from 'react';
import Box from './Box';

const ElevenBoxes = props => {
    const { hour, minutes } = props
    return (
        <div className="flexBox" >
            {
                [...Array(12)].map((x, i) => (
                    <Box
                        key={i} style={{ background: i === hour && 'none' }}
                        minutes={i === hour && minutes} i={i + 1}
                    />
                ))
            }
        </div>)
}

export default ElevenBoxes;