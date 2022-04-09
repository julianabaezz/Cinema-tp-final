import { useContext, useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UsersContext } from "../../contexts";
import { mapToArray } from "../../helpers";
import { LogUserType, User } from "../../types/models";
import { api_DB } from "../../utils";
// import {useUsers} from "../useUsers"


const useAuth = () => {
    // const [userSession, setUserSession] = useState<User>(
        //     JSON.parse(localStorage.getItem("user")!)
        // )
    const [hasUserLoggedIn, setHasUserLoggedIn] = useState<boolean>()

    const [tokenStorage, setTokenStorage] = useState<string | undefined>(
        localStorage.getItem("cinemada-token") || undefined
        );
            
    const { setCurrentUser } = useContext(UsersContext);
    const { push } = useHistory();
    
    useEffect(() => {
        if(tokenStorage)  localStorage.setItem("cinemada-token", tokenStorage);
        // console.log("Estoy pasando por useAuth");
    }, [tokenStorage]);

    useEffect(() =>{
        loginWithToken()
    }, [])

    const createUserToken = async (user: User) => {
        const newToken = Math.random().toString(36).substring(2);
        try {
            await api_DB.patch(`/users/${user.idDB}.json`, { sessionToken: newToken });
            return newToken;
        } catch (err) {
            return null;
        }
    };

    const login = async (payload: LogUserType) => {
        try {
            const response = await api_DB.get("/users.json");
            const users: User[] = mapToArray(response.data);
            const loggedUser = users.find(
                (user) =>
                    user.email === payload.email && user.password === payload.password
            );

            if (loggedUser) {
                const token = await createUserToken(loggedUser);
                // return loggedUser
                if (token) {
                    // console.log(loggedUser)
                    setTokenStorage(token);
                    setCurrentUser?.(loggedUser);
                    setHasUserLoggedIn(true)
                    push("/");
                } else {
                    setHasUserLoggedIn(false)
                    
                }
            }
            else{
                throw new Error("El usuario no existe");
            }
        } catch (e) {
            console.log(e);
        }
    };

    const loginWithToken = async() => {
        console.log(tokenStorage);
        try {
            const response = await api_DB.get("/users.json");
            const users: User[] = mapToArray(response.data);
            const loggedUser = users.find(
                (user) => user.sessionToken === tokenStorage
            );

            if (loggedUser) {
                setCurrentUser?.(loggedUser);
                setHasUserLoggedIn(true)
            }
            else{
                setHasUserLoggedIn(false)
            }
        } catch (e) {
            console.log(e);
        }
    };
    
    const logout = () =>{
        localStorage.removeItem("cinemada-token");
        push("/login")
    }

    return { login, loginWithToken, logout, hasUserLoggedIn };
};

export { useAuth };
