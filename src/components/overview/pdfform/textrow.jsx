import './textrow.scss';

function TextRow({ title, val }) {
    return <>
        <div className="t-row">
            <div className="trow-title"><p>{title}</p></div>
            <div className="t-val"><p>{val}</p></div>
        </div>
    </>
}

export default TextRow;