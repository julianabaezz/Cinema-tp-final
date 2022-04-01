// import { useEffect, useState } from "react";
import { itemsApi} from "../../api/moviesDB";
import { Items } from "../../types/models";

const useItems = () =>{

    // const [items, setItems] = useState()
    
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


return {addItem, deleteItem, getItems}


}

export {useItems}