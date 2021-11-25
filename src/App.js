import './App.css';
import { MemoryRouter, Route, Switch } from "react-router-dom";
import TopBar from './components/topbar/topbar.jsx';
import MainPage from './components/mainpage/mainpage.jsx';
import OverView from './components/overview/overview.jsx';

function App() {
	return (
		<div className='App'>
			<MemoryRouter>
				<TopBar/>
				<Switch>
					<Route exact path="/overview">
						<OverView/>
					</Route>
					<Route exact path="/">
						<MainPage/> :
						<OverView/>
					</Route>
				</Switch>
			</MemoryRouter>
		</div>
	);
}

export default App;
