import './multilinebox.scss';
import './textbox.scss'

function MultilineBox({ title, temp }) {
    return <>
        <div>
            <p className="title">{title}</p>
            <textarea className="t-temp multilineBox" placeholder={temp} rows={3}/>
        </div>
    </>
}

export default MultilineBox;