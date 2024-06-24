import React, {useState} from "react";

const Box = ({color='blue', width='300', height='200', id, removeBox}) => {
    const addPx = (value) => {
        return `${value}px`
    }
    const boxStyle = {
        backgroundColor: color,
        width: addPx(width),
        height: addPx(height),
        display: 'inline-block',
        border: '1px solid black',
        margin: '20px'
    }

    const handleClick = () => {
        removeBox(id)
    }
    return (
        <>
        <div style={boxStyle}>
        </div>
        <button onClick={handleClick}>X</button>
        </>
    )
}

export default Box;

