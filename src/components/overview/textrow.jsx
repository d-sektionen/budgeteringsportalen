import './textrow.scss';

function TextRow({ title, val }) {
    return <>
        <div className="t-row">
            <p className="trow-title">{title}</p>
            <p className="t-val">{val}</p>
        </div>
    </>
}

export default TextRow;