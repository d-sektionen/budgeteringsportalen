import Title from './textbox/title.jsx';
import LeftTextBox from './textbox/lefttextbox.jsx';
import MultilineBox from './textbox/multilinebox.jsx';
import Button from './button/button.jsx';
import PriceBox from './priceBox/pricebox.jsx';
import retrieveLiuid from '../utility/user.js';
import { useEffect, useState } from 'react';
import { Formik, Form, FieldArray } from 'formik';
import * as Yup from 'yup';
import './mainpage.scss';
import CalculatedField from './textbox/calculatedField.jsx';

const requiredField = 'Du måste fylla i detta fält!';
const UtlaggSchema = Yup.object().shape({
	description: Yup.string().required(requiredField),
	clearingNumber: Yup.string()
		.matches(/^[0-9-]*$/)
		.min(4, 'För kort!')
		.required(requiredField),
	accountNumber: Yup.string()
		.matches(/^[0-9- ]*$/)
		.required(requiredField),
	bankName: Yup.string()
		.matches(/^[aA-öÖ\s]+$/)
		.required(requiredField),
	priceBoxes: Yup.array().of(
		Yup.object().shape({
			spec: Yup.string().required(requiredField),
			price: Yup.number().required(requiredField),
			amount: Yup.number().required(requiredField),
		})
	),
});

function MainPage() {
	const [liuid, setLiuid] = useState();
	const [name, setName] = useState();
	const [date, setDate] = useState();
	const [user, setUser] = useState(undefined);

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
			temp: liuid,
		},
		{
			title: 'Namn',
			temp: name,
			name: 'name',
		},
		{
			title: 'Ort',
			temp: 'Linköping',
			name: 'city',
		},
		{
			title: 'Datum',
			temp: date,
		},
	];

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const access = urlParams.get('access');
		//let user = {}
		if (access != null) {
			window.localStorage.setItem('token', access);
			window.history.replaceState({}, document.title, '/');
			retrieveLiuid().then((user) => {
				setLiuid(user.liuid);
				setName(user.name);
			});
		} else if (
			window.localStorage.getItem('token') !== 'null' ||
			window.localStorage.getItem('token') != null
		) {
			retrieveLiuid().then((user) => {
				setLiuid(user.liuid);
				setName(user.name);
			});
		}
	}, [liuid, name]);

	useEffect(() => {
		const d = new Date();
		setDate(d.toDateString());
	}, [date]);

	useEffect(() => {}, []);
	return (
		<>
			<div id='mainPage'>
				{!liuid && (
					<Button href='https://backend.d-sektionen.se/account/token/?redirect=http://localhost:3000' />
				)}
				{liuid && name && (
					<>
						<Formik
							initialValues={{
								description: undefined,
								clearingNumber: '',
								accountNumber: '',
								bankName: '',
								priceBoxes: [
									{ spec: '', price: 0, amount: 0 },
									{ spec: '', price: 0, amount: 0 },
								],
								totalPrice: 0,
								liuId: liuid,
								name: name,
								city: 'Linköping',
								signDate: date,
							}}
							validationSchema={UtlaggSchema}
							onSubmit={async (values) => {
								await new Promise((r) => setTimeout(r, 500));
								alert(JSON.stringify(values, null, 2));
							}}
						>
							{({ errors, values, touched, setFieldValue }) => (
								<Form className='container' autoComplete='off'>
									{console.log(user)}
									<div className='textboxRow'>
										{console.log(name)}
										<FieldArray name='priceBoxes'>
											{() =>
												values.priceBoxes.map((box, i) => {
													//const boxErrors = (errors.priceBoxes.length && errors.priceBoxes[i]) || {};
													//const boxTouched = (touched.priceBoxes.length && touched.priceBoxes[i]) || {};
													return <PriceBox i={i} key={i} />;
												})
											}
										</FieldArray>
										<div id='total'>
											<CalculatedField
												id='totalPrice'
												title='Totalt'
												name='totalPrice'
												value={values.totalPrice}
												values={values}
												setFieldValue={setFieldValue}
												readOnly
											/>
										</div>
									</div>
									{
										//                  <Button onClick={() => setPriceBoxes(priceboxes => [...priceboxes, {price:0,amount:1}])} title="Lägg till utgift"></Button>
									}{' '}
									<div className='textboxRow'>
										<MultilineBox
											title='Beskrivning av inköpet'
											placeholder='Jag köpte dessa saker för att...'
											name='description'
											error={touched?.description && errors?.description}
										/>
									</div>
									<div className='textboxRow'>
										<Title titleText={'Kontouppgifter för överföring'} />
										{textContentBank.map((box, i) => (
											<LeftTextBox
												title={box.title}
												temp={box.temp}
												name={box.name}
												id={box.name}
												error={touched[box.name] && errors[box.name]}
												key={i}
											/>
										))}
									</div>
									<div className='textboxRow'>
										<Title titleText={'Övriga uppgifter'}></Title>
										{textContentUser.map((box, i) => (
											<LeftTextBox
												title={box.title}
												temp={box.temp}
												name={box.name}
												id={box.name}
												key={i}
												touched={touched[box.name]}
											/>
										))}
									</div>
									{/* <select value="1" id="selectDropdown">
                    <option value="1">EventU</option>
                    <option value="2">Alumni</option>
                    <option value="3">D-Group</option>
                    <option value="4">Donna</option>
                    <option value="5">InfU</option>
                    <option value="6">LINK</option>
                    <option value="7">MafU</option>
                    <option value="8">NärU</option>
                    <option value="9">PubU</option>
                    <option value="10">STABEN</option>
                    <option value="11">UtbU</option>
                    <option value="12">Valberedningen</option>
                    <option value="13">WebbU</option>
                    <option value="13">Werkmästeriet</option>
                  </select> */}
									<p className='warning'>
										Genom att signera intygar jag att ovanstående är korrekt och
										sanningsenligt samt att sektionen får lagra informationen i
										detta formulär tillsvidare i bokföringssyfte.
									</p>
									<button type='submit'>Submit</button>
								</Form>
							)}
						</Formik>
					</>
				)}
			</div>
		</>
	);
}

export default MainPage;
