import { useEffect, useState } from "react";
import { Formik, Form, FieldArray, Field } from "formik";
import Login from "../login/Login";
import PriceBox from "../boxes/priceBox/pricebox";
import useAuthContext from "../../hooks/useAuthContext";
import * as Yup from "yup";
import Button from "../button/Button";
import MultilineBox from "../boxes/multilineBox/multilinebox";
import CalculatedField from "../calculatedField";
import SelectBox from "../boxes/selectBox/selectBox";
import Title from "../title";
import LeftTextBox from "../boxes/leftTextBox/lefttextbox";
import FileInput from "../fileInput/fileInput";
//import axios from 'axios'


import "./expenseForm.scss";
import "../button/button.scss";
import axios from "axios";

const requiredField = "Du måste fylla i detta fält!";
const UtlaggSchema = Yup.object().shape({
  description: Yup.string().required(requiredField),
  clearingNumber: Yup.string()
    .matches(/^[0-9-]*$/)
    .min(4, "För kort!")
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
  fileinput: Yup.array().nullable().test("correct-type", requiredField, () => {
    const files = document.getElementById("fileinput").files; 
    for (let i = 0; i < files.length; i++) {
      if(files[i].type !== "application/pdf"){
        return false;
      }
    }
    return true;}),
});

const submitFunction = async (values) => {
  //console.log(JSON.stringify(values, null, 2));
  console.log(values);
  
  let formData = new FormData()
  let file = values.fileinput

  formData.append("file", file)
  formData.append("document", JSON.stringify(values))
  formData.append("name", values.name)
  formData.append("bankName", values.bankName)
  formData.append("bankNr", values.accountNumber)
  formData.append("clearingNr", values.clearingNumber)
  formData.append("location", values.city)
  formData.append("articles", JSON.stringify(values.priceBoxes))
  formData.append("description", values.description)
  formData.append("committee_id", values.utskott + 1)
  
  formData.append("date",new Date().toISOString())



  const token = window.localStorage.getItem('token')
  const headers = {Authorization: `Bearer ${token}`,'Content-Type': 'application/x-www-form-urlencoded' }
  
  axios({
    method:'post',
    url:'http://localhost:8000/budget/expense-entries/',
    data: formData,
    headers: headers,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (response) {
      console.log(response);
  });
};



const ExpenseForm = ({ onClickSubmit }) => {
  const [date, setDate] = useState();
  const { user, authFinished } = useAuthContext();

  const textContentBank = [
    {
      title: "Clearing-nr",
      temp: "8123-4",
      name: "clearingNumber",
    },
    {
      title: "Konto-nr",
      temp: "123 456 789-0",
      name: "accountNumber",
    },
    {
      title: "Bank",
      temp: "D-Bank",
      name: "bankName",
    },
  ];

  const textContentUser = [
    {
      title: "LiU-id",
      temp: user?.liuid,
    },
    {
      title: "Namn",
      temp: user?.name,
      name: "name",
    },
    {
      title: "Ort",
      temp: "Linköping",
      name: "city",
    },
    {
      title: "Datum",
      temp: date,
    },
  ];

  useEffect(() => {
    const d = new Date();
    setDate(d.toDateString());
  }, [date]);

  return (
    <>
{/*       { !authFinished  && !user.liuid && <Login />}
      {user && authFinished &&  ( */}
        <>
          <Formik
            initialValues={{
              description: "",
              clearingNumber: "",
              accountNumber: "",
              bankName: "",
              priceBoxes: [{ spec: "", price: 0, amount: 0 }],
              liuId: user.liuid,
              name: user.name,
              city: "Linköping",
              signDate: date,
              utskott: "",
              fileinput: [],

            }}
            validationSchema={UtlaggSchema}
            onSubmit={submitFunction /*async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            } */}
          >
            {({ errors, values, touched, setFieldValue, handleChange }) => (
              <Form className="container" autoComplete="off">
                <div className="textboxRow">
                  <FieldArray
                    name="priceBoxes"
                    render={(arrayHelpers) => (
                      <>
                        {values.priceBoxes.map((box, i) => (
                          <PriceBox i={i} key={i} />
                        ))}
                        <Button
                          type="button"
                          onClick={() =>
                            arrayHelpers.push({
                              spec: "",
                              price: 0,
                              amount: 0,
                            })
                          }
                          title={"Lägg till rad"}
                        />
                        {values.priceBoxes.length > 1 && <Button
                          type="button"
                          onClick={() =>
                            arrayHelpers.pop()
                          }
                          title={"Ta bort rad"}
                        />}
                      </>
                    )}
                  />
                </div>

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
                    values={values.priceBoxes}
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
                <FileInput
                  name="fileinput"
                  error={errors.fileinput}
                  handleChange={handleChange}
                  //handleChange={onChange}
                  id="fileinput"
                />
                <div className="textboxRow">
                  <label
                    className={`${errors.sign && touched.sign ? "error" : ""}`}
                  >
                    <Field type="checkbox" name="sign"/>
                    <p className="warning">
                      Genom att signera intygar jag att ovanstående är korrekt
                      och sanningsenligt samt att sektionen får lagra
                      informationen i detta formulär tillsvidare i
                      bokföringssyfte.
                    </p>
                  </label>
                </div>
                {/*/onClick={onClickSubmit*/}
                <button className="button" type="submit" >Submit</button>
              </Form>
            )}
          </Formik>
        </>
{/*       )} */}
    </>
  );
};

export default ExpenseForm;
