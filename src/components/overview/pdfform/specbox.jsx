import './specbox.scss';
//import './specrow.scss';
import React, {useEffect, useState} from 'react';
import SpecRow from './specrow';

function SpecBox({ values }) {

    const [total, setTotal] = useState(0)

    const calcTotal = () => {
        let total = 0
        values.forEach(val => {
            total += val.amount * val.price
        });
        return total
    }

    useEffect(() => {
        setTotal(calcTotal())
    }, [])


    return <>
        <div className="specContainer">
            <div className="stitle srow" >
                <div className="scol large"><p>Specifikation</p></div>
                <div className="scol"><p>Antal</p></div>
                <div className="scol"><p>Pris</p></div>
                <div className="scol"><p>Summa</p></div>
            </div>
            {values.map((val, i) => (
                <SpecRow
                    spec={val.spec}
                    amount={val.amount}
                    price={val.price}
                    key={i}
                />
            ))}
            <div className="stitle srow" >
                <div className="scol large"></div>
                <div className="scol"><p>Total</p></div>
                <div className="scol"><p>{total}</p></div>
            </div>
            {/*
            <div className="total srow">
                <div className="scol large empty"/>
                <div className="stitle scol"><p>Total</p></div>
                <div className="scol"><p>{total}</p></div>  
            </div>
            */}

        </div>
    </>
}




export default SpecBox;