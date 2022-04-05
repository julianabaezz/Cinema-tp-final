import { useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import { itemsApi} from "../../api/moviesDB";
import { ApiResponse, Items } from "../../types/models";

const useItems = () =>{
    const params = new URLSearchParams(window.location.search)
    const page = Number(params.get("page")) || 1
    const search = params.get("search") || undefined
    const {push} = useHistory()
    
    
    const [items, setItems] = useState<ApiResponse>()

    useEffect(() => {
        itemsApi
        .searchMulti({page, search})
        .then((response) => setItems(response))
    }, [page, search])

    const setPageParams = (page: number) =>{
        params.set("page", page.toString())
        push(`${window.location.pathname}?${params.toString()}`)        

    }

    const setSearchParams= (input: string) =>{
        params.set("search", input)
        push(`${window.location.pathname}?${params.toString()}`)
    }

    const getItems = async()=>{
        const response = await itemsApi.getItemsFB();
        return response
        
    }

    const addItem= async(datos: Items) =>{        
        await itemsApi.addItemFB(datos);
        getItems()
        
    };

    const deleteItem = async(id:number) =>{
        await itemsApi.deleteItemFB(id)
        getItems()
    }
    const [itemDetail, setDetail] = useState<Items>()

    const getDetail= async(id:string) =>{
        await itemsApi.getItemFB(id).then((response) => { setDetail(response)})
    }
    const [itemsFB, setItemsFB] = useState<Items[]>()

    const displayItemsFB = async() =>{
        await getItems().then((response) => { setItemsFB(response)})
    }

return {addItem, deleteItem, getItems, getDetail, setDetail, displayItemsFB, setPageParams, setSearchParams, items, itemDetail, itemsFB, page }

}

export {useItems}