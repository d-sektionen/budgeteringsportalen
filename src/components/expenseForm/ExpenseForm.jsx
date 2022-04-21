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

import "./expenseForm.scss";
import "../button/button.scss";

import { post } from "../../utility/request";

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
      price: Yup.number().positive().required(requiredField),
      amount: Yup.number().positive().required(requiredField),
    })
  ),
  utskott: Yup.string().required(requiredField),
  fileinput: Yup.array().nullable().test("correct-type", requiredField, () => {
    const files = document.getElementById("fileinput").files;
    for (const f of files) {
      if (f.type !== "application/pdf")
        return false;
    }
    return true;
  }),
});

const ExpenseForm = ({ }) => {
  const [date, setDate] = useState();
  const [files, setFiles] = useState([]);
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

  const submitFunction = async (values, { resetForm }) => {
    console.log(JSON.stringify(values, null, 2));
    console.log(values);

    const formData = new FormData()

    const readFileAsync = file => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = e => {
          resolve(e.target.result)
        }
        reader.onerror = reject;
        reader.readAsDataURL(file)
      })
    }

    for (const f of files) {
        const fileData = await readFileAsync(f)
        formData.append("files[]", fileData)
    }

    formData.append("document", JSON.stringify(values))
    formData.append("name", values.name)
    formData.append("bankName", values.bankName)
    formData.append("bankNr", values.accountNumber)
    formData.append("clearingNr", values.clearingNumber)
    formData.append("location", values.city)
    formData.append("articles", JSON.stringify(values.priceBoxes))
    formData.append("description", values.description)
    formData.append("committee_id", parseInt(values.utskott) + 1)

    formData.append("date", new Date().toISOString())

    const token = window.localStorage.getItem('token')
    //const config = {Authorization: `Bearer ${token}`,'Content-Type': 'application/x-www-form-urlencoded' }
    const config = { 'Content-Type': 'application/x-www-form-urlencoded' }

    post('/budget/expense-entries/', formData, config)
      .then(res => {
        console.log(res.status);
        if (res.status === 201) {
          //resetForm()
          alert("Success")
        }
      })
      .catch(error => {
        alert("There was an error")
        if (error.response) {
          console.log(error.response);
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  };
  return (
    <>
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
          onSubmit={submitFunction}
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
                      {values.priceBoxes.length > 1 && <Button
                        type="button"
                        onClick={() =>
                          arrayHelpers.pop()
                        }
                        title={"Ta bort rad"}
                      />}
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
                  />
                ))}
              </div>
              <FileInput
                name="fileinput"
                error={errors.fileinput}
                handleChange={e => {
                  handleChange(e)
                  setFiles(e.target.files)
                }}
                id="fileinput"
              />
              <div className="textboxRow">
                <label
                  className={`${errors.sign && touched.sign ? "error" : ""}`}
                >
                  <Field type="checkbox" name="sign" />
                  <p className="warning">
                    Genom att signera intygar jag att ovanstående är korrekt
                    och sanningsenligt samt att sektionen får lagra
                    informationen i detta formulär tillsvidare i
                    bokföringssyfte.
                  </p>
                </label>
              </div>
              <button className="button" type="submit" >Submit</button>
            </Form>
          )}
        </Formik>
      </>
    </>
  );
};

export default ExpenseForm;
