import { useEffect, useContext, useState } from 'react'

import './menu.css'

import { FiX, FiMenu } from 'react-icons/fi'

const entries = ['Översikt', 'Personligt utlägg']

const Menu = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div>
			{isOpen && (
				<div className='menu'>
					<div className='header'>
						<FiX className='exit' onClick={() => setIsOpen(!isOpen)} />
						<a className='imageWrapper' href='https://d-sektionen.se'>
							<img src={''} alt='D-sek logo' useMap='circle' />
							<map name='circle'>
								<area shape='circle' alt='D-sek' coors='0,100%,100%,100%' />
							</map>
						</a>
					</div>

					<ul>
						{entries.map((entry) => (
							<li>{entry}</li>
						))}
					</ul>
				</div>
			)}
			<FiMenu className='left' onClick={() => setIsOpen(!isOpen)} />
		</div>
	)
}

export default Menu
