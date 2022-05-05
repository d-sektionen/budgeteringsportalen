import React, { useEffect, useState } from 'react';
import axios from "axios";
import {get} from "../../../utility/request"
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


const getCommittes = () =>{
	let committees = []
	get("/committee/all/")
	.then(res=> {
		console.log(res.data);
		
		res.data.forEach(e => {
			committees.push(e.name)	
		});
	})
	.catch(res=> {
		console.log(res.data);
	});

	return committees
}


const SelectBox = ({ name, value, handleChange, error }) => {

	const [committees, setCommittees] = useState([])

	useEffect(()=>{
		setCommittees(getCommittes())
	}, [])

	return (
		<div className={`margin-0 inputTextBox ${error ? 'error' : ''}`}>
			<p className='title'>Utskott</p>
			<select name={name} value={value} onChange={handleChange}>
				<option value='' disabled defaultValue>
					Välj utskott
				</option>
				{committees.map((skott, i) => (
					<option value={i} key={i}>
						{skott}
					</option>
				))}
			</select>
		</div>
	);
};

export default SelectBox;
