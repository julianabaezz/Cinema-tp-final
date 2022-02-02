import axios from "axios";

const api_movies = axios.create({
    baseURL: "https://api.themoviedb.org/3/", 
    params:{
        apiKey:'c4f20b04ae96b0b922feea716a2fec16'
    }
})

export {api_movies}