import './lefttextbox.css';

function LeftTextBox({ title, temp }) {
    return <>
        <div class="inputTextBox">
            <p class="l-title">{title}</p>
            <p class="l-temp">{temp}</p>
        </div>
    </>
}

export default LeftTextBox;