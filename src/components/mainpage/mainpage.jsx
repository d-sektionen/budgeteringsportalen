import TextBox from './textbox/textbox.jsx';
import './mainpage.css';

function MainPage() {
    const validFunc = (text) => {
        return text.length < 10;
    };

    return <>
        <div id="mainPage">
            <TextBox title={"Specifikation"} temp={"WebbU-hoodie"}></TextBox>
            <TextBox title={"Antal"} temp={"8"}></TextBox>
            <TextBox title={"Pris"} temp={"499"}></TextBox>
            <TextBox title={"Summa"} temp={"3992"}></TextBox>
            <TextBox title={"Totalt"} temp={"3992"}></TextBox>
        </div>
    </>
}

export default MainPage;