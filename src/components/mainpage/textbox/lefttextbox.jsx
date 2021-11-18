import { Field } from 'formik';

import './lefttextbox.scss';

const LeftTextBox = ({ title, temp, name, id, error }) => {
    return (
        <div className={`inputTextBox ${error ? 'error' : ''}`}>
            <p className="l-title">{title}</p>
            {console.log(error)}
            {name && <Field id={id} name={name} type="text" className="l-temp" placeholder={temp}/>}
            {!name && <Field type="text" className="l-temp" value={temp} readOnly={true} />}
        </div>
    )
}

export default LeftTextBox;