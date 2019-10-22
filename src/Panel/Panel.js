import React from "react";
import "./Panel.css";
const Panel = props => {
    const startGame = props.startGame;
    const positions = props.positions;

    const signs = [positions[0] % 10, positions[1] % 10, positions[2] % 10];

    let winMoney = money => {
        setTimeout(() => {
            props.onChildWin(money);
            return;
        }, 3000);
    };
    if (startGame && props.money > 0) {
        if (JSON.stringify(signs) === "[8,8,8]") winMoney(2000);
        if (JSON.stringify(signs) === "[9,9,9]") winMoney(1000);
        if (JSON.stringify(signs) === "[0,0,0]") winMoney(4000);
        if (JSON.stringify(signs) === "[1,1,1]") winMoney(150);
        if (
            (signs[0] === 9 || signs[0] === 1) &&
            (signs[1] === 9 || signs[1] === 1) &&
            (signs[2] === 9 || signs[2] === 1) &&
            JSON.stringify(signs) !== "[1,1,1]" &&
            JSON.stringify(signs) !== "[9,9,9]"
        )
            winMoney(75);
        if (
            JSON.stringify(signs) === "[6,6,6]" ||
            JSON.stringify(signs) === "[7,7,7]" ||
            JSON.stringify(signs) === "[8,8,8]"
        )
            winMoney(50);
        if (
            JSON.stringify(signs) === "[2,2,2]" ||
            JSON.stringify(signs) === "[3,3,3]" ||
            JSON.stringify(signs) === "[4,4,4]"
        )
            winMoney(20);
        if (
            JSON.stringify(signs) === "[4,4,4]" ||
            JSON.stringify(signs) === "[5,5,5]" ||
            JSON.stringify(signs) === "[6,6,6]"
        )
            winMoney(10);
        if (
            (((signs[0] === 2 || signs[0] === 4 || signs[0] === 6) &&
                (signs[1] === 2 || signs[1] === 4 || signs[1] === 6) &&
                (signs[2] === 2 || signs[2] === 4 || signs[2] === 6)) ||
                ((signs[0] === 3 || signs[0] === 5 || signs[0] === 7) &&
                    (signs[1] === 3 || signs[1] === 5 || signs[1] === 7) &&
                    (signs[2] === 3 || signs[2] === 5 || signs[2] === 7)) ||
                ((signs[0] === 4 || signs[0] === 6 || signs[0] === 8) &&
                    (signs[1] === 4 || signs[1] === 6 || signs[1] === 8) &&
                    (signs[2] === 4 || signs[2] === 6 || signs[2] === 8))) &&
            JSON.stringify(signs) !== "[2,2,2]" &&
            JSON.stringify(signs) !== "[3,3,3]" &&
            JSON.stringify(signs) !== "[4,4,4]" &&
            JSON.stringify(signs) !== "[5,5,5]" &&
            JSON.stringify(signs) !== "[6,6,6]" &&
            JSON.stringify(signs) !== "[7,7,7]" &&
            JSON.stringify(signs) !== "[8,8,8]"
        )
            winMoney(5);
    }

    return (
        <>
            <div className="Panel">{props.children}</div>
        </>
    );
};

export default Panel;
