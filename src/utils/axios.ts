import axios from "axios";

const api_DB = axios.create({
    baseURL: "https://cinemada-c5234-default-rtdb.firebaseio.com/"
})

const api_movies = axios.create({
    baseURL: "https://api.themoviedb.org/3/", 
    params:{
        api_key:'c4f20b04ae96b0b922feea716a2fec16'
    }
})

export {api_movies, api_DB}