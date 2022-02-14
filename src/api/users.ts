import { AddUserType } from "../types/models"
import { api_users } from "../utils"
import { User } from "../types/models"
import { mapToArray } from "../helpers"

const getUsers = async ():Promise<User[]> =>{
   const response = await api_users.get('/users.json');
   return mapToArray(response.data);
}

const addUser = async (payload:AddUserType) =>{
   await api_users.post('/users.json', payload)
}

export const usersApi = { addUser, getUsers }