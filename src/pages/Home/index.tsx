import { Layout } from "../../components";
import { withAuth } from "../../hoc";
import { useContext} from "react";
import { UsersContext } from "../../contexts";
import { UserCards } from "../../components/parts";


const HomePage = () => {
    const{currentUser} = useContext(UsersContext)

    return (
        <Layout>
            <div className="container-fluid home">
                <h1 className="typo">Home</h1> 
                <h3 className="typo">Hola, {currentUser?.firstName}</h3>
                <UserCards/>              

            </div>
        </Layout>
    )
}

export  const Home = withAuth(HomePage) 