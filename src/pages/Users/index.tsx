import { FC } from "react"
import { Layout } from "../../components"
import { UsersTable } from "../../components/parts"
import { withAuth } from "../../hoc"

const Users: FC  = () => {
    return(
        <Layout>
            <UsersTable/>
            
        </Layout>
        
    )
}

export const Usuario = withAuth(Users) 