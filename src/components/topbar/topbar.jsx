import './topbar.scss';
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
