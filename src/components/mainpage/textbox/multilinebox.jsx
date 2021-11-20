import './multilinebox.scss';
import './textbox.scss'

function MultilineBox({ title, temp }) {
    return <>
        <div className="multilineBox">
            <p className="title">{title}</p>
            <textarea placeholder={temp} rows={3}/>
        </div>
    </>
}

export default MultilineBox;