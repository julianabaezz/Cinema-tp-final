import { yupResolver } from "@hookform/resolvers/yup"
import { FC } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { useAuth} from "../../../hooks/auth"
import { LogUserType } from "../../../types/models"
import { defaultValues } from "./defaultValues"
import { validationSchema } from "./validationSchema"

const LogUsers: FC = () =>{
    const {login} = useAuth()
    const {handleSubmit, register} =useForm({
        defaultValues,
        resolver: yupResolver(validationSchema),
    })    
   

    const onSubmit = async (data:LogUserType) =>{
        const response = await login(data);
        localStorage.setItem("users", JSON.stringify(response));
           

    }

    return(
        <form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3 fs-5">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input
                        required
                        type="email" 
                        {...register("email")}
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
                        {...register("password")}
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
                    <Link className= "link-dark" to="#">
                        Olvidé mi contraseña
                    </Link>
                </div>
            </form>
    )

}

export {LogUsers}