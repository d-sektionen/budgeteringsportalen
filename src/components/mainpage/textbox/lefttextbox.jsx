import { Field } from 'formik';

import './lefttextbox.scss';

const LeftTextBox = ({ title, temp, name, id, error }) => {
	return (
		<div className={`inputTextBox ${error ? 'error' : ''}`}>
			<p className='title'>{title}</p>
			{name && <Field id={id} name={name} type='text' placeholder={temp} />}
			{!name && <Field type='text' value={temp} readOnly={true} />}
		</div>
	);
};

export default LeftTextBox;
