import React from 'react';

import './selectBox.scss';

const utskott = [
	'Alumni',
	'D-Group',
	'Donna',
	'EventU',
	'InfU',
	'LINK',
	'MafU',
	'NärU',
	'PubU',
	'STABEN',
	'Valberedningen',
	'WebbU',
	'Werkmästeriet',
];

const SelectBox = ({ name, value, handleChange, error }) => {
	return (
		<div className={`margin-0 inputTextBox ${error ? 'error' : ''}`}>
			<p className='title'>Utskott</p>
			<select name={name} value={value} onChange={handleChange}>
				<option value='' disabled defaultValue>
					Välj utskott
				</option>
				{utskott.map((skott, i) => (
					<option value={i} key={i}>
						{skott}
					</option>
				))}
			</select>
		</div>
	);
};

export default SelectBox;
