import TextBox from './textbox/textbox.jsx';
import './mainpage.css';

function MainPage() {
    const validFunc = (text) => {
        return text.length < 10;
    };

    return <>
        <div id="mainPage">
            <div class="textboxRow">
                <div id="spec"><TextBox title={"Specifikation"} temp={"WebbU-hoodie"}></TextBox></div>
                <div id="amount"><TextBox title={"Antal"} temp={"8"}></TextBox></div>
                <div id="price"><TextBox title={"Pris"} temp={"499"}></TextBox></div>
                <div id="sum"><TextBox title={"Summa"} temp={"3992"}></TextBox></div>
                <div id="total"><TextBox title={"Totalt"} temp={"3992"}></TextBox></div>
            </div>
        </div>
    </>
}

export default MainPage;