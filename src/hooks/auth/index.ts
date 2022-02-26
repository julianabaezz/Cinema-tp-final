// import { useState } from "react";
import { useHistory } from "react-router-dom";
import { mapToArray } from "../../helpers";
import { LogUserType, User } from "../../types/models"
import { api_users } from "../../utils"
// import {useUsers} from "../useUsers"


const useAuth = () =>{

    // const [userSession, setUserSession] = useState<User>(
    //     JSON.parse(localStorage.getItem("user")!)
    // )

    
    const { push } = useHistory()
    
    
    
    
    const login = async (payload: LogUserType) =>{
            
            const response = await api_users.get("/users.json");
            const users: User[] = mapToArray(response.data);
            return users.find((user) => {
                if(user.email === payload.email && user.password === payload.password){
                console.log(user)   
                push("/") 
                return user
                }
                return false 
            })
            
    
        }
        return{login}
    
    
}


export{ useAuth }