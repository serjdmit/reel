import React from "react";
import Sign from "../Sign";

import { threeBar, oneBar, twoBar, seven, cherry } from "../images";

let signs = [threeBar, oneBar, twoBar, seven, cherry];

for (let i = 0; i <= 400; i++) {
    signs.unshift(threeBar, oneBar, twoBar, seven, cherry);
}

const Reel = props => {
    const marks = props.marks;
    const rotate = props.rotate * 62;
    const rotateStyle = {
        transform: `translateY(${rotate}px)`,
        transition: `ease-in ${props.time}s`
    };
    return (
        <>
            <div className="ReelWrap">
                <div className="Reel">
                    <div className="ReelSigns" style={rotateStyle}>
                        {signs.map((result, key) => {
                            return <Sign key={key} src={result} alt={"sign"} />;
                        })}
                    </div>
                </div>
            </div>
            {marks === true && (
                <div className="Marks">
                    <div className="mark"></div>
                    <div className="mark"></div>
                    <div className="mark"></div>
                </div>
            )}
        </>
    );
};

export default Reel;
