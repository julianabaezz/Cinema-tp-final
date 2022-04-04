import { Layout } from "../../components";
import { withAuth } from "../../hoc";
import { useContext} from "react";
import { UsersContext } from "../../contexts";
import { UserCards } from "../../components/parts";


const HomePage = () => {
    const{currentUser} = useContext(UsersContext)

    return (
        <Layout>
            <h1 className="typo">Home</h1> 
            <h3 className="cardTypo">⚔️Hola, <span className="cardTitle"> {currentUser?.firstName}</span>⚔️</h3>
            <div className="container home">
                <UserCards/>         

            </div>
        </Layout>
    )
}

export  const Home = withAuth(HomePage) 