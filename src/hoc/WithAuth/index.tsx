import { FC } from "react"
// import { UsersContext } from "../../contexts";
import { useAuth } from "../../hooks/auth";
import { Redirect, useHistory } from "react-router-dom";
// import { Login } from "../../pages";
import { Loading } from "../../common";

//Verifico si existe una sesión activa y en caso de no existir carga la pagina de Login.
//Si hay un usuario en sesión entonces se carga el componente actual o, si vengo de logiin o sign up, tengo que
//enviar a la pagina principal,


const publicRoutes = [
    "/login",
    "/signup"
]


type WithAuthenticationFn = (Component:FC) => FC;

const withAuth: WithAuthenticationFn = (Component) =>{
    
    const Authenticated:FC = (): JSX.Element | null =>{
        const {location} = useHistory()
        const {hasUserLoggedIn} = useAuth()
        
        // const {currentUser} = useContext(UsersContext)
        
        if(hasUserLoggedIn === undefined) return <Loading/>;

        if (hasUserLoggedIn && publicRoutes.includes(location.pathname)) <Redirect to="/login"/>;

        if (hasUserLoggedIn === false && !publicRoutes.includes(location.pathname)) <Redirect to="/login"/>;
            
        
        return <Component/>
    }
    return Authenticated
}
export {withAuth}