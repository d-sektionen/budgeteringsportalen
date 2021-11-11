import TextBox from "../textbox/textbox";
import React, { useRef } from 'react';
import './pricebox.css';
import '../mainpage.css';


function PriceBox(props){
    

    const spec = useRef();
    const price =  useRef();
    const amount = useRef();
    const sum = useRef();
    return (
        <div class="textboxRow">
            <div id="spec">
                <p>Specifikation</p>
                <input class="inputField" title={"Specifikation"} required ref={spec}/>
            </div>
            <div id="price">
                <p>Pris</p>
                <input id="price" class="inputField" title={"pris"} required ref={price}/>
            </div>
            <div id="amount">
                <p>Antal</p>
                <input class="inputField" title={"antal"} ref={amount}/>
            </div>
            <div id="sum">
                <p>Summa</p>
                <input class="inputField" title={"summa"} ref={sum}/>
            </div>
        </div>
    )
}

export default PriceBox;