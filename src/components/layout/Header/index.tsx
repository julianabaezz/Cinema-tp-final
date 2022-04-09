import { useContext } from "react"
import { Link } from "react-router-dom"
import { UsersContext } from "../../../contexts"
import { useAuth } from "../../../hooks/auth"



const Header = () => {
    const {logout} = useAuth()
    const {currentUser} = useContext(UsersContext)
    
    return (
        <header>
        <nav className= "navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link className="navbar-brand typo" to="/">CINEMADA</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/movies">Peliculas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/series">Series</Link>
                        </li>
                        {currentUser?.role === 'admin' && (
                        <li className="nav-item">
                            <Link className="nav-link" to="/users">Users</Link>
                        </li>
                        )}
                        {currentUser?.role === 'admin' && (
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin">Admin</Link>
                        </li>
                        )}
                        <li className="nav-item">
                            <button className="nav-link" onClick={logout}>Salir</button>
                            {/* <Link className="nav-link" to="/login">Salir</Link> */}
                        </li>
                    </ul>
                </div>
            </div>
            

        </nav>
        </header>
    )
}

export { Header }