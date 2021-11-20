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
	}, [values]);

	return (
		<div className={`inputTextBox ${error ? 'error' : ''}`}>
			<p className='title'>{title}</p>
			<input
				id='totalPrice'
				type='number'
				name='totalPrice'
				value={values.totalPrice}
			/>
		</div>
	);
};

export default CalculatedField;