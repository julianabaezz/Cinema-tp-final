import { FC, useContext, useEffect } from "react"
import { UsersContext } from "../../../contexts";
import { useUsers } from "../../../hooks"

const UsersTable: FC = () => {

    const {getUsers, deleteUsers} = useUsers();
    const {users} = useContext(UsersContext)

    useEffect(()=>{
        getUsers();
    },[]);

    const deleteUser = (idDB:string) =>{
        console.log("borrar")
        deleteUsers(idDB)

    }

    return (
        <>
        <h2 className="typo">Users</h2>
        <table className="table mb-0">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Fecha de nacimiento</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {users?.map((user) =>(                
                <tr key={user.idDB}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.date}</td>
                    <td>{user.email}</td>
                    <td><button className="btn btn-outline-danger" onClick={() => {deleteUser(user.idDB)}}>Borrar usuario</button></td>
                </tr>
                
                ))}
            
            </tbody>
        </table>
        </>
    )
}

export { UsersTable }