import { Field } from 'formik';

import './multilinebox.scss';
import './textbox.scss';

function MultilineBox({ title, placeholder, name, error }) {
	return (
		<>
			<div className={`multilineBox span-2 ${error ? 'error' : ''}`}>
				<p className='title'>{title}</p>
				<Field
					name={name}
					placeholder={placeholder}
					rows={7}
					component='textarea'
				/>
			</div>
		</>
	);
}

export default MultilineBox;
