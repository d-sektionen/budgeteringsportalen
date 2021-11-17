import { useState } from 'react'

import './topbar.css';
import Menu from '../layout/menu'

import { FiMenu, FiUser } from 'react-icons/fi'

const TopBar = () => {
	return (
		<div id='topBar'>
			<Menu />
			<span>Räkning till d-sektionen</span>
			<FiUser />
		</div>
	)
}

export default TopBar;