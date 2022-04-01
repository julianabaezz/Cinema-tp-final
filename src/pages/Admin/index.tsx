import { Layout } from "../../components"
import { AdminCards } from "../../components/parts"
const Admin = () => {
    return (
        <Layout>
            <h2>Admin</h2>
            <div className="container">
            <div className="form-label m-3 p-3">
                <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <AdminCards />
            </div>

        </Layout>
    )
}

export { Admin }