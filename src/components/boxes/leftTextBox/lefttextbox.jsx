import { Field } from 'formik';
import { useState } from "react";


import './lefttextbox.scss';

const LeftTextBox = ({ title, temp, name, id, error, touched, isFormik = true }) => {
	const [fieldClass, setFieldClass] = useState("untouched");
	const [prevVal, setPrevVal] = useState("INIT_VALUE");
	const checkChange = e => {
		if(prevVal != e.target.value){
			setFieldClass("touched");
		}
	}

	return (
		<div className={`inputTextBox ${error ? 'error' : ''}`}>
			<p className='title'>{title}</p>
			{name && isFormik && (
				<Field
					id={id}
					name={name}
					type='text'
					placeholder={temp}
					//className={`${!touched ? 'untouched' : 'touched'}`}
					className={fieldClass}
					onKeyPress={checkChange}
				/>
			)}
			{!name && isFormik && <Field type='text' value={temp} readOnly={true} />}
			{!isFormik && <p className='displayBox'> {temp}</p>}
		</div >
	);
};

export default LeftTextBox;
