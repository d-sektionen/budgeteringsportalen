import './topbar.scss';

import { FiUser } from 'react-icons/fi';
import Sidebar from '../sidebar/Sidebar';

const TopBar = () => {
	return (
		<div id='topBar'>
			<Sidebar />
			<span>Räkning till d-sektionen</span>
			<div/>
		</div>
	);
};

export default TopBar;
