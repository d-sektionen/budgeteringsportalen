	import React, { useEffect, useState } from 'react';
import axios from "axios";
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
	const url = "http://localhost:8000/committee/all/"
	const token = window.localStorage.getItem('token')
  	const headers = {Authorization: `Bearer ${token}`}
	let committees = []
	axios({
		method:'get',
		url: url,
		headers: headers,
	})
	.then(function (response) {
		console.log(response.data);
		
		response.data.forEach(e => {
			committees.push(e.name)	
		});
	})
	.catch(function (response) {
		console.log(response.data);
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
