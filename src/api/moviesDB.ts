// import { ApiResponse } from "../types/models";
import { api_movies } from "../utils";
// import { mapToArray } from "../helpers";

const getItemsTMDB = async() =>{     
        const response = await api_movies.get('movie/top_rated');
        return (response.data.results)
    }

export const itemsApi = {getItemsTMDB}