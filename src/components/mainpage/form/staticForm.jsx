import PriceBox from '../priceBox/pricebox';
import MultilineBox from '../textbox/multilinebox';
import CalculatedField from '../textbox/calculatedField';
import LeftTextBox from '../textbox/lefttextbox';
import { Field } from 'formik';
import Title from '../textbox/title';

import '../textbox/generalTextboxStyles.scss';
import '../textbox/lefttextbox.scss';

const StaticForm = ({ values }) => {
	const textContentBank = [
		{
			title: 'Clearing-nr',
			temp: '8123-4',
			name: 'clearingNumber',
		},
		{
			title: 'Konto-nr',
			temp: '123 456 789-0',
			name: 'accountNumber',
		},
		{
			title: 'Bank',
			temp: 'D-Bank',
			name: 'bankName',
		},
	];

	const textContentUser = [
		{
			title: 'LiU-id',
			temp: 'mickr592',
		},
		{
			title: 'Namn',
			temp: 'name',
			name: 'name',
		},
		{
			title: 'Ort',
			temp: 'Linköping',
			name: 'city',
		},
		{
			title: 'Datum',
			temp: '2021',
		},
	];

	return (
		<div className='container' autoComplete='off'>
			<div className='textboxRow'>
				<Title titleText={'Kontouppgifter för överföring'} />
				{textContentBank.map((box, i) => (
					<LeftTextBox
						title={box.title}
						key={i}
						isFormik={false}
						temp={box.value}
					/>
				))}
			</div>
			<div className='textboxRow'>
				<Title titleText={'Övriga uppgifter'}></Title>
				{textContentUser.map((box, i) => (
					<LeftTextBox
						title={box.title}
						key={i}
						isFormik={false}
						temp={box.value}
					/>
				))}
			</div>
			<div className='textboxRow'>
				<label>
					<input type='checkbox' name='sign' />
					<p className='warning'>
						Genom att signera intygar jag att ovanstående är korrekt och
						sanningsenligt samt att sektionen får lagra informationen i detta
						formulär tillsvidare i bokföringssyfte.
					</p>
				</label>
			</div>
		</div>
	);
};

export default StaticForm;
