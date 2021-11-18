import Title from './textbox/title.jsx';
import LeftTextBox from './textbox/lefttextbox.jsx';
import MultilineBox from './textbox/multilinebox.jsx';
import Button from './button/button.jsx';
import PriceBox from './priceBox/pricebox.jsx';
import retrieveLiuid from '../utility/user.js';
import { useEffect, useState } from "react";
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import './mainpage.scss';


const requiredField = 'Du måste fylla i detta fält!'
const UtlaggSchema = Yup.object().shape({
  clearingNumber: Yup.number().min(4, 'För kort!').required(requiredField),
  bankName: Yup.string().required(requiredField)
})

function MainPage() {
    const [liuid, setLiuid] = useState();
    const [name, setName] = useState();
    const [date, setDate] = useState();
    const [priceboxes, setPriceBoxes] = useState([]);


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
      }
    ]

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
      }
    ]

    useEffect(()=>{
        const urlParams = new URLSearchParams(window.location.search);
        const access = urlParams.get("access");
        //let user = {}
        if (access != null) {
          window.localStorage.setItem("token", access);
          window.history.replaceState({}, document.title, "/");
          retrieveLiuid().then(user => {
            setLiuid(user.liuid)
            setName(user.name)
          })
        } else if (
          window.localStorage.getItem("token") !== "null" ||
          window.localStorage.getItem("token") != null
        ) {
          retrieveLiuid().then(user => {
            setLiuid(user.liuid)
            setName(user.name)
          })
        }
        
      }, [liuid, name])

      useEffect(()=>{
          const d = new Date()
          setDate(d.toDateString())
      }, [date])

      
    return <>
        <div id="mainPage">
            {!liuid && <Button href="https://backend.d-sektionen.se/account/token/?redirect=http://localhost:3000"/>}
            {liuid && <>
              <Formik
                initialValues={{
                  clearingNumber: '',
                  accountNumber: '',
                  bankName: '',
                }}
                validationSchema={UtlaggSchema}
                onSubmit={async (values) => {
                  await new Promise((r) => setTimeout(r, 500));
                  alert(JSON.stringify(values, null, 2));
                }}
              >
                {({errors}) => (
                <Form className="container" autoComplete="off">
                  <div className="textboxRow">
                      <PriceBox/>
                      {priceboxes.map(e => <PriceBox props={e}/>)}
                      <div id="total"><LeftTextBox title={"Totalt"} temp={"0"}></LeftTextBox></div>
                  </div>
                  
                  <Button onClick={() => setPriceBoxes(priceboxes => [...priceboxes, {price:0,amount:1}])} title="Lägg till utgift"></Button>
                  <div className="innerContainer">
                      <MultilineBox title="Beskrivning av inköpet" />
                  </div>

                  <div className="textboxRow">
                      <Title titleText={"Kontouppgifter för överföring"}></Title>
                      {textContentBank.map((box) => <LeftTextBox title={box.title} temp={box.temp} name={box.name} id={box.name} error={errors[box.name]} />)}
                  </div>

                  <div className="textboxRow">
                      <Title titleText={"Övriga uppgifter"}></Title>
                      {textContentUser.map((box) => <LeftTextBox title={box.title} temp={box.temp} name={box.name} id={box.name} />)}
                  </div>

                  <select value="1" id="selectDropdown">
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
                  </select>

                  <p className="warning">
                      Genom att signera intygar jag att ovanstående är korrekt och sanningsenligt samt
                      att sektionen får lagra informationen i detta formulär tillsvidare i bokföringssyfte.
                  </p>
                  <button type="submit">Submit</button>
                </Form>)}
              </Formik>
            </>
            }
        </div>
    </>
}

export default MainPage;