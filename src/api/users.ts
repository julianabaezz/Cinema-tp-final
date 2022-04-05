import { AddUserType } from "../types/models"
import { api_DB } from "../utils"
import { User } from "../types/models"
import { mapToArray } from "../helpers"

const getUsers = async ():Promise<User[]> =>{
   const response = await api_DB.get('/users.json');
   return mapToArray(response.data);
}

const addUser = async (payload:AddUserType) =>{
   await api_DB.post('/users.json', payload)
}

const deleteUser = async(idDB:string) =>{
   await api_DB.delete(`/users/${idDB}.json`)
}
export const usersApi = { addUser, getUsers, deleteUser }