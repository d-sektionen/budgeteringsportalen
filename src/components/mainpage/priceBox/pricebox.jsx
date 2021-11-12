import React, { useRef } from 'react';
import './pricebox.css';
import '../mainpage.css';


function PriceBox(props){
    const spec = useRef();
    const price =  useRef();
    const amount = useRef();
    const sum = useRef();
    return (
        <div>
            <div id="spec">
                <p>Specifikation</p>
                <input class="inputField" title={"Specifikation"} placeholder={"Specifikation..."} required ref={spec}/>
            </div>
            <div id="price">
                <p>Pris</p>
                <input class="inputField" title={"Pris"} placeholder={"0"} required ref={price}/>
            </div>
            <div id="amount">
                <p>Antal</p>
                <input class="inputField" title={"Antal"} placeholder={"1"} ref={amount}/>
            </div>
            <div id="sum">
                <p>Summa</p>
                <input class="inputField" title={"Summa"} placeholder={"0"} ref={sum}/>
            </div>
        </div>
    )
}

export default PriceBox;