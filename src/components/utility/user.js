import {get, post} from "./request";

const retrieveLiuid = async () => {
    let headers = {}
    headers.authorization = "Bearer " + window.localStorage.getItem("token")
    let options = { method: "get", headers: new Headers(headers) };
    const res = await fetch("http://localhost:8000/account/me", options)
    //const res = await fetch("https://backend.d-sektionen.se/account/me", options)
    if(res.status !== 400){
        const data = await res.json()
        return {liuid:data.username, name:data.pretty_name}
    }
}

const getExpenses = async data => {
    let url = "/budget/expense-entries/"
    let res = await get(url)
    const j = await res.json()// funkar inte!!
    return j.data
}

const submitFormToBackend = async data =>{
    //FIXA SEN
    let url = "/budget/expense-entries/"
    let res = await post(url)
    console.log(res.status) 
};

export {retrieveLiuid, getExpenses, submitFormToBackend}