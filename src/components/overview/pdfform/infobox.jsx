import './infobox.scss';
import TextRow from './textrow';


function InfoBox({ title, rowTitles, values }) {
    return <>
        <div className="infoContainer">
            <p className='t-info-title'>{title}</p>
            {rowTitles.map((t,i) => (<TextRow title={t} val={values[i]}/>))}
        </div>
    </>
}

export default InfoBox;