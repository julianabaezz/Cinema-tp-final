import { FC } from "react";
import { useForm } from "react-hook-form";
import { defaultValues } from "./defaultValues";
import { validationSchema } from "./validationSchema";
import { yupResolver } from "@hookform/resolvers/yup"
import { Link } from "react-router-dom";
// import { useUsers } from "../../../hooks";
import { AddUserType } from "../../../types/models";

const AddUsers: FC = () =>{

    // const {addUser} = useUsers()
    
    const {handleSubmit, register} = useForm({
        defaultValues,
        resolver: yupResolver(validationSchema),     
    
    })
    
    const onSubmit = (data:AddUserType) =>{        
        // console.log(data)
        // addUser(data)
    }

    return(
        <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="col">
            <div className="row mb-2">
            <label htmlFor="exampleInputName1" className="form-label">Nombre</label>
                <input
                    type="text" 
                    {...register("firstName")} 
                    className="form-control" 
                    placeholder="Nombre" 
                    aria-label="First name" 
                />
            </div>
            <div className="row mb-2">
            <label htmlFor="exampleInputName1" className="form-label">Apellido</label>
                <input
                    type="text" 
                    {...register("lastName")}
                    className="form-control" 
                    placeholder="Apellido" 
                    aria-label="Last name" 
                />
            </div>
            <div className="row mb-2">
            <label htmlFor="exampleInputName1" className="form-label">Fecha de nacimiento</label>
                <input
                    type="date" 
                    {...register("date")}
                    className="form-control" 
                />
            </div>
        </div>
        <div className="col">
            <div className="row mb-2">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input
                
                type="email"
                {...register("email")}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
            />
            </div>
            <div className="row">
            <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
            <input
                
                type="password"
                {...register("password")}
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
    )

}

export {AddUsers}