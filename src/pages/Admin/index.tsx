import { FC } from "react"
import { Container } from "react-bootstrap"
import { Layout } from "../../components"
import { AdminCards } from "../../components/parts"
import { withAuth } from "../../hoc"

const AdminPage : FC= () => {
    return (
        <Layout>
            <Container>
                <h2>Seleccioná una película:</h2>
            <AdminCards />
            </Container>
        </Layout>
    )
}

export const Admin = withAuth(AdminPage)