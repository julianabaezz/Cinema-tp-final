import { Container } from "react-bootstrap"
import { Layout } from "../../components"
import { AdminCards } from "../../components/parts"
const Admin = () => {
    return (
        <Layout>
            <Container>
                <h2>Seleccioná una película:</h2>
            <AdminCards />
            </Container>
        </Layout>
    )
}

export { Admin }