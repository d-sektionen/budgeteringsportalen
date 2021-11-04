import TextBox from './textbox/textbox.jsx';
import './mainpage.css';

function MainPage() {
    const validFunc = (text) => {
        // ändra till  
        return text.length < 10;
    };

    return <>
        <div id="mainPage">
            <p>Test</p>
            <TextBox validFunc={validFunc}></TextBox>
        </div>
    </>
}

export default MainPage;