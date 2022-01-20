import './descriptionbox.scss';


function DescriptionBox({ title, text }) {
    return <>
        <div>
            <div><p className='descr-title descr-text'>{title}</p></div>
            <div><p className="descr-text">{text}</p></div>
        </div>
    </>
}

export default DescriptionBox;