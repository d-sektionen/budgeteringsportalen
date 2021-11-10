import Title from './textbox/title.jsx';
import TextBox from './textbox/textbox.jsx';
import LeftTextBox from './textbox/lefttextbox.jsx';
import Button from './button/button.jsx';
import './mainpage.css';

function MainPage() {
    /*
    const validFunc = (text) => {
        return text.length < 10;
    };
    */

    return <>
        <div id="mainPage">
            <div class="textboxRow">
                <div id="spec"><TextBox title={"Specifikation"} temp={"WebbU-hoodie"}></TextBox></div>
                <div id="amount"><TextBox title={"Antal"} temp={"8"}></TextBox></div>
                <div id="price"><TextBox title={"Pris"} temp={"499"}></TextBox></div>
                <div id="sum"><TextBox title={"Summa"} temp={"3992"}></TextBox></div>
                <div id="total"><TextBox title={"Totalt"} temp={"3992"}></TextBox></div>
            </div>
            <Button/>
            <Button/>
            <div class="textboxRow">
                <div><Title titleText={"Kontouppgifter för överföring"}></Title></div>
                <div><LeftTextBox title={"Clearing-nr"} temp={"8123-4"}></LeftTextBox></div>
                <div><LeftTextBox title={"Konto-nr"} temp={"123 456 789-0"}></LeftTextBox></div>
                <div><LeftTextBox title={"Bank"} temp={"D-Bank"}></LeftTextBox></div>
            </div>
            <div class="textboxRow">
                <div><Title titleText={"Övriga uppgifter"}></Title></div>
                <div><LeftTextBox title={"LiU-ID"} temp={"turte123"}></LeftTextBox></div>
                <div><LeftTextBox title={"Namn"} temp={"Ture Teknolog"}></LeftTextBox></div>
                <div><LeftTextBox title={"Ort"} temp={"Linköping"}></LeftTextBox></div>
                <div><LeftTextBox title={"Datum"} temp={"2021-11-04"}></LeftTextBox></div>
            </div>
            <Button/>
            <Button/>
            <p class="warning">
                Genom att signera intygar jag att ovanstående är korrekt och sanningsenligt samt
                att sektionen får lagra informationen i detta formulär tillsvidare i bokföringssyfte.
            </p>
        </div>
    </>
}

export default MainPage;