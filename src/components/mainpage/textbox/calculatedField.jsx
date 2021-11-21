import React, { useEffect } from 'react';

const CalculatedField = ({ values, error, title, setFieldValue }) => {
	useEffect(() => {
		var val = 0;
		if (values.priceBoxes) {
			val = values.priceBoxes.reduce(
				(a, b) => a.amount * a.price + b.amount * b.price
			);
		}
		setFieldValue('totalPrice', val);
	}, [values, setFieldValue]);

	return (
		<div className={`inputTextBox margin-0 ${error ? 'error' : ''}`}>
			<p className='title'>{title}</p>
			<input
				id='totalPrice'
				name='totalPrice'
				value={values.totalPrice}
				readOnly
			/>
		</div>
	);
};

export default CalculatedField;
