import { AddUsers } from "../../components/forms"
import { withAuth } from "../../hoc"

const SignupPage = () => {
    return (
        <div className=" container-fluid login">
            <h1 className="typo display-3">Cinemada</h1>
            <AddUsers/>
        </div>

    )
}

export const Signup = withAuth(SignupPage)