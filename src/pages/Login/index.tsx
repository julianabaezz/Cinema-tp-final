import { LogUsers } from "../../components/forms"

const Login = () => {
    return (
        <div className=" container-fluid login">
            <h1 className="typo display-2">Cinemada</h1>
                <LogUsers/> 
                <div className="ml-2 align-self-start">Para acceder como administrador, usar la siguiente cuenta:
                    <ul> 
                        <li>email: admin@ada.com</li> 
                        <li>contraseña: ada123</li>                    
                    </ul>
                </div>
        </div>
    )
}

export { Login }