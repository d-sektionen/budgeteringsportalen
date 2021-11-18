import './topbar.scss';
import Menu from '../layout/menu';

import { FiUser } from 'react-icons/fi';

const TopBar = () => {
	return (
		<div id='topBar'>
			<Menu />
			<span>Räkning till d-sektionen</span>
			<FiUser />
		</div>
	);
};

export default TopBar;
