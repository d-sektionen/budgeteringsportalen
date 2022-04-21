const retrieveLiuid = async () => {
	const headers = {};
	headers.authorization = 'Bearer ' + window.localStorage.getItem('token');
	const options = { method: 'get', headers: new Headers(headers) };
	const res = await fetch('http://localhost:8000/account/me', options);
	//const res = await fetch("https://backend.d-sektionen.se/account/me", options)
	if (res.status !== 400 || res.status !== 401) {
		const data = await res.json();
		console.log(data);
		return {
			liuid: data.username,
			name: data.pretty_name,
			committees: data.committees,
			treasurer: data.contact_for,
			privileges: data.privileges,
		};
	}
};

export { retrieveLiuid };
