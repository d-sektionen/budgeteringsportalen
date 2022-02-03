import './login.scss';
import Button from "../mainpage/button/button.jsx";

const Login = () => {
	return (
		<div id='login'>
			<h1>Logga in</h1>
            <p>Genom att logga in här kan du komma åt D&#8209;sektionens portal för att hantera digitala personliga utlägg, inloggningen sker via LiUs centrala inloggningssystem.</p>
            <p>{`Genom att logga in godkänner du att dina personuppgifter hanteras i enlighet med `} <a href="https://d-sektionen.se/wp-content/uploads/2018/05/Policy-datahantering-D-sektionen.pdf"> D&#8209;sektionens datahanteringspolicy</a>.</p>
            <p><Button href="https://backend.d-sektionen.se/account/token/?redirect=http://localhost:3000" /></p>
		</div>
	);
};

export default Login;