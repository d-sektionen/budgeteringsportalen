import { useEffect, useContext, useState } from 'react'
import { FiX, FiMenu, FiGithub } from 'react-icons/fi'

import logo from '../../images/round.svg'

import './menu.scss'

const entries = [
	'Översikt',
	'Personligt utlägg',
	'Översikt',
	'Personligt utlägg',
	'Översikt',
	'Personligt utlägg',
]

const Menu = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='menuContainer'>
			{isOpen && (
				<div className='menu'>
					<div className='header'>
						<FiX className='exit' onClick={() => setIsOpen(!isOpen)} />
						<a className='imgWrapper' href='https://d-sektionen.se'>
							<img src={logo} alt='D-sek logo' useMap='circle' />
							<map name='circle'>
								<area shape='circle' alt='D-sek' coors='0,100%,100%,100%' />
							</map>
						</a>
					</div>

					<ul>
						{entries.map((entry) => (
							<li>
								<a href='/' className='menuItem'>
									{entry}
								</a>
							</li>
						))}
					</ul>

					<div className='footer'>
						<p>Sidan är utvecklad av Webbgruppen</p>
						<div>
							<a href='https://github.com/d-sektionen/medlem'>
								<FiGithub />
							</a>
						</div>
					</div>
				</div>
			)}
			<FiMenu
				onClick={() => setIsOpen(!isOpen)}
				style={{ visibility: `${isOpen ? 'hidden' : 'visible'}` }}
			/>
			{isOpen && <div className='darkOverlay' />}
		</div>
	)
}

export default Menu
