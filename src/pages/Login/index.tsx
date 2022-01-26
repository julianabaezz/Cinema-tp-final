import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className=" container-fluid login">
            <h1 className="typo display-2">Cinemada</h1>
            <form className="mb-5">
                <div className="mb-3 fs-5">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">No vamos a compartir tus datos con nadie más</div>
                </div>
                <div className="mb-3 fs-5">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
                <div className= "mt-4 align-self-start">
                <Link className= "link-dark" to="/signup">
                    Aún no tengo cuenta
                </Link>
                </div>

            </form>
        </div>
    )
}

export { Login }