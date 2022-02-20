import { FC } from "react"
import { useHistory } from "react-router-dom";


const isAuthenticated= false

type WithAuthenticationFn = (Component:FC) => FC;

const withAuth: WithAuthenticationFn = (Component) =>{
    
    const Authenticated:FC = (): JSX.Element | null =>{
        const {push} = useHistory()
        
        if(!isAuthenticated) push('/login');
        return isAuthenticated ? <Component/> : null
    }
    return Authenticated
}
export {withAuth}