import React from "react";

const Sign = props => {
    return (
        <div className="AppImage">
            <img src={props.src} alt={props.alt} />
        </div>
    );
};

export default Sign;
