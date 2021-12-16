import Title from './textbox/title.jsx';
import LeftTextBox from './textbox/lefttextbox.jsx';
import MultilineBox from './textbox/multilinebox.jsx';
import Button from './button/button.jsx';
import PriceBox from './priceBox/pricebox.jsx';
import retrieveLiuid from '../utility/user.js';
import { useEffect, useState } from 'react';
import { Formik, Form, FieldArray, Field } from 'formik';
import * as Yup from 'yup';
import './mainpage.scss';
import CalculatedField from './textbox/calculatedField.jsx';
import SelectBox from './textbox/selectBox.jsx';

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
	utskott: Yup.string().required(requiredField),
	sign: Yup.bool().oneOf([true], 'Field must be checked')
});

function MainPage() {
	const [liuid, setLiuid] = useState();
	const [name, setName] = useState();
	const [date, setDate] = useState();

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
      <div id="mainPage">
        {!liuid && (
          <Button href="https://backend.d-sektionen.se/account/token/?redirect=http://localhost:3000" />
        )}
        {liuid && name && (
          <>
            <Formik
              initialValues={{
                description: "",
                clearingNumber: "",
                accountNumber: "",
                bankName: "",
                priceBoxes: [
                  { spec: "", price: 0, amount: 0 },
                  { spec: "", price: 0, amount: 0 },
                ],
                totalPrice: 0,
                liuId: liuid,
                name: name,
                city: "Linköping",
                signDate: date,
                utskott: "",
                sign: false,
              }}
              validationSchema={UtlaggSchema}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
              }}
            >
              {({ errors, values, touched, setFieldValue, handleChange }) => (
                <Form className="container" autoComplete="off">
                  <div className="textboxRow">
                    <FieldArray name="priceBoxes">
                      {() =>
                        values.priceBoxes.map((box, i) => {
                          return <PriceBox i={i} key={i} />;
                        })
                      }
                    </FieldArray>
                  </div>
                  {
                    //                  <Button onClick={() => setPriceBoxes(priceboxes => [...priceboxes, {price:0,amount:1}])} title="Lägg till utgift"></Button>
                  }
                  <div className="textboxRow grid-2-1">
                    <MultilineBox
                      title="Ändamål med inköpet"
                      placeholder="Jag köpte dessa saker för att..."
                      name="description"
                      error={touched?.description && errors?.description}
                    />
                    <CalculatedField
                      id="totalPrice"
                      title="Totalt"
                      name="totalPrice"
                      value={values.totalPrice}
                      values={values}
                      setFieldValue={setFieldValue}
                      readOnly
                    />
                    <SelectBox
                      name="utskott"
                      value={values.utskott}
                      handleChange={handleChange}
                      error={touched.utskott && errors.utskott}
                    />
                  </div>
                  <div className="textboxRow">
                    <Title titleText={"Kontouppgifter för överföring"} />
                    {textContentBank.map((box, i) => (
                      <LeftTextBox
                        title={box.title}
                        temp={box.temp}
                        name={box.name}
                        id={box.name}
                        error={touched[box.name] && errors[box.name]}
                        touched={touched[box.name]}
                        key={i}
                      />
                    ))}
                  </div>
                  <div className="textboxRow">
                    <Title titleText={"Övriga uppgifter"}></Title>
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
                  <div className="textboxRow">
										<label className={`${errors.sign && touched.sign ? 'error' : ''}`}>
											<Field type="checkbox" name="sign" />
											<p className="warning">
												Genom att signera intygar jag att ovanstående är korrekt
												och sanningsenligt samt att sektionen får lagra
												informationen i detta formulär tillsvidare i
												bokföringssyfte.
											</p>
										</label>
                  </div>
                  <button type="submit">Submit</button>
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
