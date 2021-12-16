import './descriptionbox.scss';


function DescriptionBox({ title, text }) {
    return <>
        <div>
            <p className='descr-title descr-text'>{title}</p>
            <p className="descr-text">{text}</p>
        </div>
    </>
}

export default DescriptionBox;