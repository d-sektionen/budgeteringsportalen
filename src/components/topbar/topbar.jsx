import './topbar.css';
import { FiMenu, FiUser } from 'react-icons/fi'

function TopBar() {
    return <>
        <div id="topBar">
            <FiMenu className="left"/>
            <span>Räkning till d-sektionen</span>
            <FiUser className="right"/>
        </div>
    </>
}

export default TopBar;