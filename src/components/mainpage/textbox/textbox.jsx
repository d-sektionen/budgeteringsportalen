import './textbox.css';

function TextBox({ title, temp }) {
    return <>
        <div class="inputTextBox">
            <p class="title">{title}</p>
            <input type="text" class="temp" placeholder={temp}/>
        </div>
    </>
}

export default TextBox;