import { Field } from 'formik';

import './lefttextbox.scss';

const LeftTextBox = ({ title, temp, name, id, error, touched, isFormik = true }) => {
	return (
		<div className={`inputTextBox ${error ? 'error' : ''}`}>
			<p className='title'>{title}</p>
			{name && isFormik && (
				<Field
					id={id}
					name={name}
					type='text'
					placeholder={temp}
					className={`${!touched ? 'untouched' : 'touched'}`}
				/>
			)}
			{!name && isFormik && <Field type='text' value={temp} readOnly={true} />}
			{!isFormik && <p className='displayBox'> {temp}</p>}
		</div >
	);
};

export default LeftTextBox;
