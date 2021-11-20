import { Field } from 'formik';

import './multilinebox.scss';
import './textbox.scss';

function MultilineBox({ title, placeholder, name, error }) {
	console.log(error);
	return (
		<>
			<div className={`multilineBox ${error ? 'error' : ''}`}>
				<p className='title'>{title}</p>
				<Field
					name={name}
					placeholder={placeholder}
					rows={3}
					component='textarea'
				/>
			</div>
		</>
	);
}

export default MultilineBox;
