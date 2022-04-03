import { ApiResponse, Filter, Items } from "../types/models";
import { api_movies } from "../utils";
import { api_DB } from "../utils";
import { mapToArray } from "../helpers";

const getItemsTMDB = async() =>{     
        const response = await api_movies.get(`movie/top_rated?`);
        return (response.data.results)
    }

const searchMulti = async({page, search}:Filter): Promise<ApiResponse> =>{
    let response
    if(search){
        response = await api_movies.get(`search/multi?query=${search} &page=${page}`)
    } 
    else{
        response = await api_movies.get(`movie/top_rated?`);
    }
    return response?.data
}

const addItemFB = async (payload:Items) =>{
    await api_DB.post('/items.json', payload)
    
}

const getItemsFB = async ():Promise<Items[]> =>{
    const response = await api_DB.get('/items.json');
    return mapToArray(response.data);
}
const deleteItemFB = async (id:number) =>{
    const response = await getItemsFB()
    const foundItem = response.find((item) => item.id === id)
    api_DB.delete(`/items/${foundItem?.idDB}.json`)
    
}

const getItem = async(idDB: string) =>{

    const response = await api_DB.get(`/items/${idDB}.json`)
    return response.data
}



export const itemsApi = {getItemsTMDB, searchMulti, addItemFB, getItemsFB, deleteItemFB, getItem}