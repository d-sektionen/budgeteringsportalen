import React, { useEffect, useState } from "react";

const CalculatedField = ({ values, error, title, setFieldValue }) => {
  const [totalPrice, setTotalPrice] = useState(0);


  useEffect(() => {
    var val = 0;
    if (values) {
			values.forEach(({price, amount}) => {
				val = val + price * amount
			})
    } 
    setTotalPrice(val);
  }, [values, setFieldValue]);

  return (
    <div className={`inputTextBox margin-0 ${error ? "error" : ""}`}>
      <p className="title">{title}</p>
      <input
        id="totalPrice"
        name="totalPrice"
        value={!isNaN(totalPrice) ? totalPrice : 0}
        readOnly
      />
    </div>
  );
};

export default CalculatedField;
