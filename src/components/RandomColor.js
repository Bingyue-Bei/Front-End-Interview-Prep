import React, {useEffect, useState} from "react"

const hexDict = {
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F'
}

function RandomColor() {
    const [color, setColor] = new useState("white");
    const [isHex, setIsHex] = new useState(true);

    const generateColor = () => {
        if (isHex) {
            let nums = [0, 0, 0, 0, 0, 0];
            let newColor = "#";
            for (let num in nums) {
                num = Math.floor(Math.random() * 16);
                if (num < 10) {
                    newColor += num;
                } else {
                    newColor += hexDict[num];
                }
            }
            setColor(newColor);
        } else {
            let nums = [255, 255, 255];
            for (let i = 0; i < nums.length; i++) {
                nums[i] = Math.floor(Math.random() * 256);
            }
            let newColor = `rgb(${nums[0]},${nums[1]},${nums[2]})`
            setColor(newColor);
        }
    }
    /** Question: Why do we need this useEffect function? */
    // eslint-disable-next-line
    useEffect(generateColor,[isHex])
    const styles = {
        background: color,
        width: "100vw",
        height: "100vh",
    }

    return (
        <div className="RandomColor" style={styles}>
            <button onClick={()=>{setIsHex(true)}}>Create HEX Color</button>
            <button onClick={()=>{setIsHex(false)}}>Create RGB Color</button>
            <button onClick={generateColor}>Create Random Color</button>
            <h2>{isHex ? "HEX Color" : "RGB Color"}</h2>
            <h1>{color}</h1>
        </div>
    );
}

export default RandomColor;