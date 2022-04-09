import { FC } from "react"
import { useForm } from "react-hook-form"
import { defaultValues } from "./defaultValues"
import { AddUserType } from "../../../types/models"
import { Link, useHistory } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { validationSchema } from "./validationSchema"
import { useUsers } from "../../../hooks"

const AddUsers: FC = () => {

    const {push} = useHistory()

    const {addUser} = useUsers()
    

    const { handleSubmit, register, formState } = useForm({
        defaultValues,        
        resolver: yupResolver(validationSchema),

    })

    const onSubmit = (data: AddUserType) => {
        console.log(data)
        addUser(data)
        push("/login")
    }


    return (
        <form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="col">
                <div className="row mb-2">
                    <label htmlFor="exampleInputName1" className="form-label">Nombre</label>
                    <input
                        required
                        type="text"
                        {...register("firstName")}
                        className="form-control"
                        placeholder="Nombre"
                        aria-label="First name"
                    />
                    <span className="text-danger">{formState.errors.firstName?.message}</span>
                </div>
                <div className="row mb-2">
                    <label htmlFor="exampleInputName1" className="form-label">Apellido</label>
                    <input
                        required
                        type="text"
                        {...register("lastName")}
                        className="form-control"
                        placeholder="Apellido"
                        aria-label="Last name"
                    />
                    <span className="text-danger">{formState.errors.lastName?.message}</span>
                </div>
                <div className="row mb-2">
                    <label htmlFor="exampleInputName1" className="form-label">Fecha de nacimiento</label>
                    <input
                        required
                        type="date"
                        {...register("date")}
                        className="form-control"
                    />
                    <span className="text-danger">{formState.errors.date?.message}</span>
                </div>
            </div>
            <div className="col">
                <div className="row mb-2">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input
                        required
                        type="email"
                        {...register("email")}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Email"
                    />
                    <span className="text-danger">{formState.errors.email?.message}</span>
                </div>
                <div className="row">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input
                        required
                        type="password"
                        {...register("password")}
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Contraseña"
                    />
                    <span className="text-danger">{formState.errors.password?.message}</span>
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

export { AddUsers }