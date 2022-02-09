import { FC } from "react"

const UsersTable: FC = () => {
    return (
        <>
        <h2 className="typo">Users</h2>
        <table className="table mb-0">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Email</th>
                    <th scope="col">Fecha de nacimiento</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>4/5/1970</td>
                </tr>
                <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>7/6/2000</td>
                </tr>
                <tr>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>2/10/1990</td>
                </tr>                
            </tbody>
        </table>
        </>
    )
}

export { UsersTable }