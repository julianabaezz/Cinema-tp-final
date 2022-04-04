import { FC } from "react"
import { LogUsers } from "../../components/forms"
import { withAuth } from "../../hoc"


const LoginPage: FC = () => {
    return (
        <div className=" login container-fluid ">
            <h1 className="typo display-2">Cinemada</h1>
                <LogUsers/> 
                <div className="ml-2 align-self-start">Para acceder como administrador, usar la siguiente cuenta:
                    <ul> 
                        <li>email: admin@cinemada.com</li> 
                        <li>contraseña: Admin123</li>                    
                    </ul>
                </div>
        </div>
    )
}

export const Login = withAuth(LoginPage) 