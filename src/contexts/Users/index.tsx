import { createContext, FC, useState, Dispatch, SetStateAction } from "react";
import { User } from "../../types/models";


type Context ={
    users?: User[],
    updateUsers?: (users:User[]) =>void
    currentUser?: Partial<User | undefined>,
    setCurrentUser?:Dispatch<SetStateAction<Partial<User | undefined>>>;
}

const UsersContext = createContext<Context>({
    users: undefined,
    currentUser:{},
    updateUsers: () => {},
    setCurrentUser: () => undefined,
})

const UsersProvider:FC = ({children}) =>{

    const [users, setUsers] = useState<User[]>();
    const [currentUser, setCurrentUser] = useState<Partial<User | undefined>>()

    const updateUsers = (users: User[]) =>{
        setUsers(users)
    }
    // const userLogged = (currentUser: User) =>{
    //     setCurrentUser(currentUser)
    // }


    return(
        <UsersContext.Provider value={{users, updateUsers, currentUser, setCurrentUser}}>
            {children}
        </UsersContext.Provider>


    )
}

export {UsersContext, UsersProvider}