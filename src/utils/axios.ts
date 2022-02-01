import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/", 
    params:{
        apiKey:'c4f20b04ae96b0b922feea716a2fec16'
    }
})

export {api}