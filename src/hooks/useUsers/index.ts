import { useContext } from "react";
import { usersApi } from "../../api";
import { UsersContext } from "../../contexts";
import { AddUserType} from "../../types/models";

const useUsers = () =>{

    const {updateUsers} = useContext(UsersContext)

    const addUser= async(datos: AddUserType) =>{     
        
        await usersApi.addUser(datos);
        getUsers()
        
    };

    const getUsers = async()=>{
        const response = await usersApi.getUsers();
        updateUsers?.(response)
    }

    const deleteUsers = async(idDB:string)=>{
        await usersApi.deleteUser(idDB)
        getUsers()
    }

    return {addUser, getUsers, deleteUsers }
}

export {useUsers}