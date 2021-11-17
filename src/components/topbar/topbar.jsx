import { useState } from 'react'

import './topbar.css';
import Menu from '../layout/menu'

import { FiMenu, FiUser } from 'react-icons/fi'

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (  
    <div id="topBar">
      {isOpen && <Menu />}
      <FiMenu className="left" onClick={() => setIsOpen(!isOpen)}/> 
      <span>Räkning till d-sektionen</span>
      <FiUser className="right"/>
    </div>
  )
}

export default TopBar;