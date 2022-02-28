import { useContext, useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UsersContext } from "../../contexts";
import { mapToArray } from "../../helpers";
import { LogUserType, User } from "../../types/models"
import { api_users } from "../../utils"
// import {useUsers} from "../useUsers"

const createUserToken = async (user: User) =>{
    const newToken = Math.random().toString(36).substring(2)
    try{
        await api_users.patch(`/users/${user.id}.json`, {sessionToken: newToken})
        return newToken
    } catch(err){
        return null
    }
}

const useAuth = () =>{

    // const [userSession, setUserSession] = useState<User>(
    //     JSON.parse(localStorage.getItem("user")!)
    // )
    const [tokenStorage, setTokenStorage] = useState <string>()
    const {setCurrentUser } = useContext(UsersContext)
    
    const { push } = useHistory()

    useEffect(() =>{
        console.log("Estoy pasando por useAuth")
    }, []);
    

    
    
    const login = async (payload: LogUserType) =>{
            try{

                const response = await api_users.get("/users.json");
                const users: User[] = mapToArray(response.data);
                const loggedUser = users.find((user) => 
                    user.email === payload.email && user.password === payload.password)
                    
                if (loggedUser) {                
                    const token = await createUserToken(loggedUser)
                    // return loggedUser
                    if(token){  
                        console.log(loggedUser)   
                        setTokenStorage(token);
                        setCurrentUser?.(loggedUser);
                        push("/") 
                    }
                    else{
                    
                       throw new Error("El usuario no existe") 
    
                    }}
        } catch (e){
            console.log(e)
        }

        
        
    }
    
    return{login}
}


export{ useAuth }