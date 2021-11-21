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

const SelectBox = () => {
	return (
		<div className='margin-0 inputTextBox'>
			<p className='title'>Utskott</p>
			<select id='selectDropdown'>
				<option value='-1' disabled selected>
					Välj utskott
				</option>
				{utskott.map((skott, i) => (
					<option value={i}>{skott}</option>
				))}
			</select>
		</div>
	);
};

export default SelectBox;
