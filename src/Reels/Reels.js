import React from "react";
import Reel from "./Reel";
import "./Reels.css";

const Reels = props => {
    const positions = props.positions;
    const rotate = props.positions;
    const time = [2, 2.5, 3];

    const startGame = () => {
        rotate[0] = positions[0];
        rotate[1] = positions[1];
        rotate[2] = positions[2];
    };
    if ((props.startGame || props.mix) && props.money > 0) startGame();
    if (props.money > 0) {
        if (props.reelOne) {
            rotate[0] += 1;
            time[0] = 0.1;
        }
        if (props.reelTwo) {
            rotate[1] += 1;
            time[1] = 0.1;
        }
        if (props.reelThree) {
            rotate[2] += 1;
            time[2] = 0.1;
        }
    }

    return (
        <div className={`Reels ${props.active}`}>
            <Reel marks={true} rotate={rotate[0]} time={time[0]} />
            <Reel marks={true} rotate={rotate[1]} time={time[1]} />
            <Reel marks={false} rotate={rotate[2]} time={time[2]} />
        </div>
    );
};

export default Reels;
