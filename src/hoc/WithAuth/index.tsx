import { FC } from "react"


// import { useHistory } from "react-router-dom";

//Verifico si existe una sesión activa y en caso de no existir carga la pagina de Login.
//Si hay un usuario en sesión entonces se carga el componente actual o, si vengo de logiin o sign up, tengo que
//enviar a la pagina principal,


const isAuthenticated= true




type WithAuthenticationFn = (Component:FC) => FC;

const withAuth: WithAuthenticationFn = (Component) =>{
    
    const Authenticated:FC = (): JSX.Element | null =>{
        // const {push} = useHistory()
        
        // if(!isAuthenticated) push('/login');
        // return isAuthenticated ? <Component/> : null

        

        return isAuthenticated?  <Component/> : null 
    }
    return Authenticated
}
export {withAuth}