import { useEffect } from 'react';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import './pricebox.scss';
import '../mainpage.scss';

const PriceBox = ({ i }) => {
	const {
		values: { priceBoxes },
		touched,
		setFieldValue,
	} = useFormikContext();

	const currentBox = priceBoxes[i];

	useEffect(() => {
		if (currentBox && currentBox?.price && currentBox?.amount) {
			setFieldValue(
				`priceBoxes.${i}.total`,
				currentBox.price * currentBox.amount
			);
		}
	}, [currentBox, i, setFieldValue]);

	console.log(touched);
	return (
		<div className='priceBox'>
			<div id='spec' className=''>
				<p>Specifikation</p>
				<Field
					className='inputField'
					title={'Specifikation'}
					name={`priceBoxes.${i}.name`}
					type='text'
				/>
				<ErrorMessage name={`priceBoxes.${i}.name`} component='div' />
			</div>
			<div id='price' className='box'>
				<p>Pris</p>
				<Field
					className='inputField'
					title={'pris'}
					name={`priceBoxes.${i}.price`}
					type='number'
				/>
				<ErrorMessage name={`priceBoxes.${i}.price`} component='div' />
			</div>
			<div id='amount'>
				<p>Antal</p>
				<Field
					className='inputField'
					title={'antal'}
					name={`priceBoxes.${i}.amount`}
					type='number'
				/>
			</div>
			<div id='sum'>
				<p>Summa</p>
				<Field
					className='inputField'
					title={'summa'}
					readOnly
					name={`priceBoxes.${i}.total`}
				/>
			</div>
		</div>
	);
};

export default PriceBox;
