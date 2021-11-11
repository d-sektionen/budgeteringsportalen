import Title from './textbox/title.jsx';
import TextBox from './textbox/textbox.jsx';
import LeftTextBox from './textbox/lefttextbox.jsx';
import Button from './button/button.jsx';
import PriceBox from './priceBox/pricebox.jsx';
import retrieveLiuid from '../utility/user.js';
import { useEffect, useState } from "react";
import './mainpage.css';

function MainPage() {
    const [liuid, setLiuid] = useState();
    const [name, setName] = useState();
    const [date, setDate] = useState();
    
    let [priceboxes] = useState([]);

    const addPriceBox = () => {
        console.log(priceboxes)
        priceboxes.push({
            id: 0,
            price:  0,
            amount: 1
        })
        priceboxes = [...priceboxes]
    }

    useEffect(()=>{
        const urlParams = new URLSearchParams(window.location.search);
        const access = urlParams.get("access");
        let user = {}
        if (access != null) {
          window.localStorage.setItem("token", access);
          window.history.replaceState({}, document.title, "/");
          retrieveLiuid().then(user => {
            setLiuid(user.liuid)
            setName(user.name)
          })
        } else if (
          window.localStorage.getItem("token") != "null" ||
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
            <div class="textboxRow">
                {/* Här ska det finnas en knapp som genererar en komponent som innehåller amount, price och sum-fälten */}
                {/* priceboxes.map(e => <PriceBox props={e}/>) */}
                <div id="total"><TextBox title={"Totalt"} temp={"3992"}></TextBox></div>
            </div>
            
            <Button onClick={() => addPriceBox()} title="Lägg till utgift"></Button>
            <div class="textboxRow">
                <div><Title titleText={"Kontouppgifter för överföring"}></Title></div>
                <div><LeftTextBox title={"Clearing-nr"} temp={"8123-4"}></LeftTextBox></div>
                <div><LeftTextBox title={"Konto-nr"} temp={"123 456 789-0"}></LeftTextBox></div>
                <div><LeftTextBox title={"Bank"} temp={"D-Bank"}></LeftTextBox></div>
            </div>
            
            <div class="textboxRow">
                <div><Title titleText={"Övriga uppgifter"}></Title></div>
                <div><LeftTextBox title={"LiU-ID"} temp={liuid}></LeftTextBox></div>
                <div><LeftTextBox title={"Namn"} temp={name}></LeftTextBox></div>
                <div><LeftTextBox title={"Ort"} temp={"Linköping"}></LeftTextBox></div>
                <div><LeftTextBox title={"Datum"} temp={date}></LeftTextBox></div>
            </div>
            <p class="warning">
                Genom att signera intygar jag att ovanstående är korrekt och sanningsenligt samt
                att sektionen får lagra informationen i detta formulär tillsvidare i bokföringssyfte.
            </p>
            </>}
        </div>
    </>
}

export default MainPage;