import React, {useState} from "react";

const Box = ({color='blue', width='300', height='200'}) => {
    const addPx = (value) => {
        return `${value}px`
    }
    const boxStyle = {
        backgroundColor: color,
        width: addPx(width),
        height: addPx(height),
        display: 'inline-block',
        border: '1px solid black'
    }

    return (
        <div style={boxStyle}>
        </div>
    )
}

export default Box;

