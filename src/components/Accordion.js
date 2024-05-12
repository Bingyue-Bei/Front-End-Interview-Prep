import React, { useState } from "react";

const data = {
    "Question 1": "Answer 1",
    "Question 2": "Answer 2",
    "Question 3": "Answer 3",
    "Question 4": "Answer 4",
};

function Item(props) {
    const question = props.question;
    const answer = data[question];
    const selectItems = props.selectItems;
    const addSelectedItems = props.addSelectedItems;

    const changeVisibility = () => {
        addSelectedItems(question);
    }

    return (
        <div onClick={changeVisibility}>
            <h3>{question}</h3>
            <span>+</span>
            {selectItems.includes(question) && (<p>{answer}</p>)}
        </div>
    );
}

function Accordion() {
    const [enableMultiSelect, setEnableMultiSelect] = useState(false);
    const [selectItems, setSelectItems] = useState([]);

    const changeMultiSelect = () => {
        setEnableMultiSelect(!enableMultiSelect);
        setSelectItems([]);
    }

    const addSelectedItem = (newItem) => {
        if (enableMultiSelect) {
            if (!selectItems.includes(newItem)) {
                const newSelectedItems = [...selectItems, newItem];
                setSelectItems(newSelectedItems);
            } else {
                const newSelectedItems = selectItems.filter(elem => elem !== newItem);
                setSelectItems(newSelectedItems);
            }   
        } else {
            const newSelectedItems = [newItem];
            setSelectItems(newSelectedItems)
        }
    }

    return (
        <div className="Accordion">
            <h1>Project 1: Accordion</h1>
            <button onClick={changeMultiSelect}>
                {enableMultiSelect ? "Disable Multi Selection": "Enable Multi Selection"}
            </button>
            <ul>{Object.keys(data).map((elem, index) =>
                (<li key={index}><Item question={elem} 
                        addSelectedItems={addSelectedItem} 
                        selectItems={selectItems}/></li>)
            )}</ul>
        </div>
    );
}

export default Accordion;