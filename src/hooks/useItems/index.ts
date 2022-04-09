import { useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import { itemsApi} from "../../api/moviesDB";
import { ApiResponse, Items, User } from "../../types/models";
import { api_DB } from "../../utils";
import {usersApi } from "../../api/users";
import {useAuth} from "../auth"

const useItems = () =>{
    const params = new URLSearchParams(window.location.search)
    const page = Number(params.get("page")) || 1
    const search = params.get("search") || undefined
    const {push} = useHistory()
    const [items, setItems] = useState<ApiResponse>()
    const [itemDetail, setDetail] = useState<Items>()
    const [itemsFB, setItemsFB] = useState<Items[]>()
    const{loginWithToken} =useAuth()

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
        setItemsFB(response)
        // return response
        
    }
    const addItem= async(datos: Items) =>{        
        await itemsApi.addItemFB(datos);
        getItems()
        
    };

    const deleteItem = async(id:number) =>{
        await itemsApi.deleteItemFB(id)   
        getItems()     

    }
 

    const getDetail= async(id:string) =>{
        await itemsApi.getItemFB(id).then((response) => { setDetail(response)})
    }
 

    // const displayItemsFB = async() =>{
    //     await getItems().then((response) => { setItemsFB(response)})
    // }
    //ITEM VIEWED

    const addItemViewed = async(currentUser: Partial<User | undefined>, item:number) =>{
        const itemsViewed = currentUser?.viewed || [];
        itemsViewed.push(item)
        await api_DB.patch(`/users/${currentUser?.idDB}.json`, { viewed: itemsViewed})
        loginWithToken()
        
    
    }
    const deleteItemViewed = async(currentUser: Partial<User | undefined>, item: number) =>{
        const itemsViewed = currentUser?.viewed?.filter((i) => i !== item)
        await api_DB.patch(`/users/${currentUser?.idDB}.json`, { viewed: itemsViewed})
        loginWithToken()

    }

    const itemsViewed = (currentUser: Partial<User | undefined>, id: number) =>{
        const itemViewed = currentUser?.viewed?.includes(id)
        return itemViewed
    }


return {addItem, deleteItem, getItems, getDetail, setDetail, /*displayItemsFB,*/ setPageParams, setSearchParams, addItemViewed, deleteItemViewed, itemsViewed, items, itemDetail, itemsFB, page }

}

export {useItems}