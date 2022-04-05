import { useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import { itemsApi} from "../../api/moviesDB";
import { ApiResponse, Items, User } from "../../types/models";
import { api_DB } from "../../utils";
import {usersApi } from "../../api/users";

const useItems = () =>{
    const params = new URLSearchParams(window.location.search)
    const page = Number(params.get("page")) || 1
    const search = params.get("search") || undefined
    const {push} = useHistory()
    const [items, setItems] = useState<ApiResponse>()

    //SEARCH MULTI
    useEffect(() => {
        itemsApi
        .searchMulti({page, search})
        .then((response) => setItems(response))
    }, [page, search])

    //PAGE PARAMS
    const setPageParams = (page: number) =>{
        params.set("page", page.toString())
        push(`${window.location.pathname}?${params.toString()}`)        

    }
    //SEARCH PARAMS
    const setSearchParams= (input: string) =>{
        params.set("search", input)
        push(`${window.location.pathname}?${params.toString()}`)
    }
    //USE ITEMS FB
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
    //ITEM VIEWED
    const {getUsers} = usersApi

    const addItemViewed = async(currentUser: Partial<User | undefined>, item:number) =>{
        const itemsViewed = currentUser?.viewed || [];
        itemsViewed.push(item)
        await api_DB.patch(`/users/${currentUser?.idDB}.json`, { viewed: itemsViewed})
        getUsers()

    
    }
    const deleteItemViewed = async(currentUser: Partial<User | undefined>, item: number) =>{
        const itemsViewed = currentUser?.viewed?.filter((i) => i !== item)
        await api_DB.patch(`/users/${currentUser?.idDB}.json`, { viewed: itemsViewed})
        getUsers()
    }

    const itemsViewed = (currentUser: Partial<User | undefined>, id: number) =>{
        const itemViewed = currentUser?.viewed?.includes(id)
        return itemViewed
    }


return {addItem, deleteItem, getItems, getDetail, setDetail, displayItemsFB, setPageParams, setSearchParams, addItemViewed, deleteItemViewed, itemsViewed, items, itemDetail, itemsFB, page }

}

export {useItems}