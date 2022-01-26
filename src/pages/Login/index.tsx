import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className=" container-fluid login">
            <h1 className="typo display-2">Cinemada</h1>
            <form className="mb-3">
                <div className="mb-3 fs-5">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input
                        required
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                    />
                        <div id="emailHelp" className="form-text">No vamos a compartir tus datos con nadie más</div>
                </div>
                <div className="mb-3 fs-5">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input
                        required
                        type="password" 
                        className="form-control" 
                        id="exampleInputPassword1"
                    />
                </div>
                <button type="submit" className="btn btn-dark">Iniciar sesión</button>
                <div className= "mt-4 align-self-start">
                    <Link className= "link-dark" to="/signup">
                        Aún no tengo cuenta
                    </Link>
                </div>
                <div className= "mt-2 align-self-start">
                    <Link className= "link-dark" to="/">
                        Olvidé mi contraseña
                    </Link>
                </div>
            </form>
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