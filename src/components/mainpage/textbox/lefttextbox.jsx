import './lefttextbox.css';

function LeftTextBox({ title, temp }) {
    return <>
        <div class="inputTextBox">
            <p class="l-title">{title}</p>
            <input type="text" class="l-temp" placeholder={temp}/>
        </div>
    </>
}

export default LeftTextBox;