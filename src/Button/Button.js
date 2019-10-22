import React from "react";
import "./Button.css";

const Button = props => {
    const ButtonStyle = {
        color: `${props.textColor}`,
        backgroundColor: `${props.bg}`,
        borderColor: `${props.border}`
    };

    return (
        <button
            className="Button"
            style={ButtonStyle}
            onClick={props.click}
            onMouseDown={props.mousedown}
            onMouseUp={props.mouseup}
        >
            <div className="ButtonBefore" style={ButtonStyle}></div>
            <div className="ButtonAfter" style={ButtonStyle}>
                {props.children}
            </div>
        </button>
    );
};

export default Button;
