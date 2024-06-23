import React, {useState} from "react";

const Box = ({color='blue', width='300px', height='200px'}) => {
    const boxStyle = {
        backgroundColor: color,
        width: width,
        height: height,
        display: 'inline-block'
    }

    return (
        <div style={boxStyle}>
        </div>
    )
}

export default Box;