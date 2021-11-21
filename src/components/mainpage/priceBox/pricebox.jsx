import { useEffect } from 'react';
import { Field, useFormikContext } from 'formik';
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
		} else {
			setFieldValue(`priceBoxes.${i}.total`, 0);
		}
	}, [currentBox, i, setFieldValue]);

	return (
		<div className='priceBox'>
			<div
				id='spec'
				className={`${
					touched.priceBoxes &&
					touched?.priceBoxes[i]?.spec &&
					currentBox.spec === ''
						? 'error'
						: ''
				}`}
			>
				<p>Specifikation</p>
				<Field
					className='inputField'
					title={'Specifikation'}
					name={`priceBoxes.${i}.spec`}
					type='text'
				/>
			</div>
			<div className='container'>
				<div
					id='price'
					className={`${
						touched.priceBoxes &&
						touched?.priceBoxes[i]?.price &&
						!currentBox.price
							? 'error'
							: ''
					}`}
				>
					<p>Pris</p>
					<Field
						className='inputField'
						title={'pris'}
						name={`priceBoxes.${i}.price`}
						type='number'
					/>
				</div>
				<div
					id='amount'
					className={`${
						touched.priceBoxes &&
						touched?.priceBoxes[i]?.amount &&
						!currentBox.amount
							? 'error'
							: ''
					}`}
				>
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
		</div>
	);
};

export default PriceBox;
