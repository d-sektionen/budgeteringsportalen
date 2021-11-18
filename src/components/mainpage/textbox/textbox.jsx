import './textbox.scss';

function TextBox({ title, temp }) {
    return <>
        <div className="inputTextBox">
            <p className="t-title">{title}</p>
            <input type="text" className="t-temp" placeholder={temp}/>
        </div>
    </>
}

export default TextBox;