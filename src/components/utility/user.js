const retrieveLiuid = async () => {
    let headers = {}
    headers.authorization = "Bearer " + window.localStorage.getItem("token")
    let options = { method: "get", headers: new Headers(headers) };
    const res = await fetch("https://backend.d-sektionen.se/account/me", options)
    if(res.status !== 400){
        const data = await res.json()
        return {liuid:data.username, name:data.pretty_name}
    }
}

export default retrieveLiuid