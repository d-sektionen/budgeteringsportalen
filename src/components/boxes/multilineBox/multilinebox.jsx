import { Field } from 'formik';
import './multilinebox.scss';

const MultilineBox = ({ title, placeholder, name, error, isFormik = true }) => {
	return (
		<>
			<div className={`multilineBox span-2 ${error ? 'error' : ''}`}>
				<p className='title'>{title}</p>
				{isFormik && (
					<Field
						name={name}
						placeholder={placeholder}
						rows={4}
						component='textarea'
					/>
				)}
				{!isFormik && <textarea value={placeholder} readOnly={true} rows={7} />}
			</div>
		</>
	);
};

export default MultilineBox;
