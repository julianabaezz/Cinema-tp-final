import { Link } from "react-router-dom"
const Signup = () => {
    return (
        <div className=" container-fluid login">
            <h1 className="typo display-3">Cinemada</h1>
            <form>
                <div className="col">
                    <div className="row mb-2">
                    <label htmlFor="exampleInputName1" className="form-label">Nombre</label>
                        <input type="text" className="form-control" placeholder="Nombre" aria-label="First name"/>
                    </div>
                    <div className="row mb-2">
                    <label htmlFor="exampleInputName1" className="form-label">Apellido</label>
                        <input type="text" className="form-control" placeholder="Apellido" aria-label="Last name"/>
                    </div>
                    <div className="row mb-2">
                    <label htmlFor="exampleInputName1" className="form-label">Fecha de nacimiento</label>
                    <input type="date" className="form-control" />
                    </div>
                </div>
                <div className="col">
                    <div className="row mb-2">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input
                        required
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Email"
                    />
                    </div>
                    <div className="row">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input
                        required
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Contraseña"
                    />
                    </div>
                </div>
                <button type="submit" className="mt-4 btn btn-dark">Crear cuenta</button>
                <div className="mt-4 align-self-start">
                    <Link className="link-dark" to="/login">
                        Ya tengo cuenta
                    </Link>
                </div>
            </form>
        </div>

    )
}

export { Signup }