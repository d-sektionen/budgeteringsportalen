import React, { useRef } from 'react';
import './pricebox.scss';
import '../mainpage.scss';


function PriceBox(props){
    
    const spec = useRef();
    const price =  useRef(props.price);
    const amount = useRef(props.amount);
    const sum = useRef();

    return (
        <div>
            <div id="spec">
                <p>Specifikation</p>
                <input className="inputField" title={"Specifikation"} required ref={spec}/>
            </div>
            <div id="price">
                <p>Pris</p>
                <input className="inputField" title={"pris"} required ref={price}/>
            </div>
            <div id="amount">
                <p>Antal</p>
                <input className="inputField" title={"antal"} ref={amount}/>
            </div>
            <div id="sum">
                <p>Summa</p>
                <input className="inputField" title={"summa"} ref={sum}/>
            </div>
        </div>
    )
}

export default PriceBox;