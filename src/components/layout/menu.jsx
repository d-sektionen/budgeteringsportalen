import { useEffect, useContext } from 'react';

import './menu.css'

import { FiX } from 'react-icons/fi'


const entries = ['Översikt', 'Personligt utlägg']

const Menu = ({ isOpen }) => {
  
  return (
    <div className="menu" >
      <div>
        <div>
          <FiX className="exit" />
          <a className="imageWrapper" href="https://d-sektionen.se">
            <img src={''} alt="D-sek logo" useMap="circle" />
            <map name="circle">
              <area shape="circle" alt="D-sek" coors="0,100%,100%,100%"/>
            </map>
          </a>
        </div>

        <ul>
          {entries.map(entry => <li>{entry}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default Menu