import React, { useEffect, useState } from "react";

import "./specbox.scss";

function SpecBox({ values }) {
  const [total, setTotal] = useState(0);

  const calcTotal = () => {
    let total = 0;
    values.forEach((val) => {
      total += val.amount * val.price;
    });
    return total;
  };

  useEffect(() => {
    setTotal(calcTotal());
  }, []);

  console.log(values);
  return (
    <>
      <div className="specContainer">
        <div className="stitle srow">
          <div className="scol large">
            <p>Specifikation</p>
          </div>
          <div className="scol">
            <p>Antal</p>
          </div>
          <div className="scol">
            <p>Pris</p>
          </div>
          <div className="scol">
            <p>Summa</p>
          </div>
        </div>
        {values.map((val, i) => (
          <div className="srow">
            <div className="scol large">
              <p>{val.spec}</p>
            </div>
            <div className="scol">
              <p>{val.amount}</p>
            </div>
            <div className="scol">
              <p>{val.price}</p>
            </div>
            <div className="scol">
              <p>{(val.amount * val.price).toFixed(2)}</p>
            </div>
          </div>
        ))}
        <div className="stitle srow">
          <div className="scol large"></div>
          <div className="scol">
            <p>Total</p>
          </div>
          <div className="scol">
            <p>{total}</p>
          </div>
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
  );
}

export default SpecBox;
