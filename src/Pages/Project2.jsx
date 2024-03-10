import React, { useState } from 'react'
import menu from '../menu.json'
import { Button } from 'bootstrap';

const ITEMS_PER_PAGE = 4;
const [arr, setArr] = useState(menu.slice(0, ITEMS_PER_PAGE));
const [numOfPages, setNumOfPages] = useState(Math.ceil(menu.length / ITEMS_PER_PAGE));

const createBtn = () => {
    const buttens = [];
    for (let i = 1; i <= numOfPages; i++) {
        buttens.push(
            <button key={i} className=' btn' onClick={() => {btnAct(i) }}
            >{i}</button>
        )
    }
    return buttens;
}


const btnAct = (pageNum) => {
    const startIndex = (pageNum - 1) * ITEMS_PER_PAGE;

}

const Project2 = () => {
    return (
        <div>

        </div>
    )
}

export default Project2