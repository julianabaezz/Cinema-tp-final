import { FC } from "react"
import { Layout } from "../../components"
import { UsersTable } from "../../components/parts"

const Users: FC  = () => {
    return(
        <Layout>
            <UsersTable/>
            
        </Layout>
        
    )
}

export {Users}