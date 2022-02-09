import { api_users } from "../utils"

const getUsers = async () =>{
    await api_users.post('/users.json')
 }

const addUser = async (payload:any) =>{
   await api_users.post('/users.json', payload)
}

export const usersApi = { addUser, getUsers }