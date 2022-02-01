import { Link } from "react-router-dom"

const Footer = () =>{
    return(
        <footer className="bg-dark text-center text-white sticky-bottom">
        <div className="container p-3">
            Hecho con ❤️ por juliana baez       
        </div>
        <div className="text-center p-2">
        Visitá mi portfolio 
            <Link className="text-white" to="https://julianabaezz.github.io/portfolio-JB/"> aquí</Link>
        </div>
        </footer>
    )
}

export { Footer }