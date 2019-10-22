import React, { useState } from "react";
import Reels from "./Reels";
import Panel from "./Panel";
import Button from "./Button";
import "./App.css";

const App = () => {
    const [startGame, setGame] = useState(false);
    const [mix, setMix] = useState(false);
    const [money, setMoney] = useState(0);
    const [active, setActive] = useState("");

    const wheelOne = Math.floor(Math.random() * 2010);
    const wheelTwo = Math.floor(Math.random() * 2010);
    const wheelThree = Math.floor(Math.random() * 2010);
    const [positions, setPositions] = useState([
        wheelOne,
        wheelTwo,
        wheelThree
    ]);
    const [reelOne, setReelOne] = useState(false);
    const [reelTwo, setReelTwo] = useState(false);
    const [reelThree, setReelThree] = useState(false);

    const win = win => {
        setGame(false);
        setMoney(money + (win - 1));
        setActive("active");
    };

    return (
        <div className="App">
            <Reels
                startGame={startGame}
                mix={mix}
                money={money}
                positions={positions}
                reelOne={reelOne}
                reelTwo={reelTwo}
                reelThree={reelThree}
                active={active}
            />
            <Panel
                positions={positions}
                money={money}
                startGame={startGame}
                onChildWin={win}
            >
                <div className="PanelTop">
                    <Button
                        mousedown={() => {
                            setReelOne(true);
                            setActive("");
                        }}
                        mouseup={() => {
                            setReelOne(false);
                        }}
                    >
                        Sign 1
                    </Button>
                    <Button
                        mousedown={() => {
                            setReelTwo(true);
                            setActive("");
                        }}
                        mouseup={() => {
                            setReelTwo(false);
                        }}
                    >
                        Sign 2
                    </Button>
                    <Button
                        mousedown={() => {
                            setReelThree(true);
                            setActive("");
                        }}
                        mouseup={() => {
                            setReelThree(false);
                        }}
                    >
                        Sign 3
                    </Button>
                </div>
                <div className="PanelBottom">
                    <Button
                        bg="#1dd732"
                        border="#00c710"
                        mousedown={() => {
                            setActive("");
                            if (money > 0) {
                                setPositions([wheelOne, wheelTwo, wheelThree]);
                                setGame(true);
                            }
                        }}
                        mouseup={() => {
                            if (money > 0) {
                                setMoney(money - 1);
                            }
                            setGame(false);
                        }}
                    >
                        Play
                    </Button>
                    <Button
                        bg="#ff5900"
                        border="#e45000"
                        click={() => {
                            setActive("");
                            setPositions([wheelOne, wheelTwo, wheelThree]);
                            if (money > 0) {
                                setMix(true);
                            } else {
                                setMix(false);
                            }
                        }}
                    >
                        Mix
                    </Button>
                    <div className="Balance">{`${money}$`}</div>
                    <button
                        className="AddMoney"
                        onClick={() => {
                            setActive("");
                            setMoney(money + 1);
                        }}
                    >
                        Add 1$
                    </button>
                </div>
            </Panel>
        </div>
    );
};

export default App;
