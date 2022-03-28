import { Layout } from "../../components";
import { withAuth } from "../../hoc";
import { useContext } from "react";
import { UsersContext } from "../../contexts";

const HomePage = () => {
    const{currentUser} = useContext(UsersContext)
    return (
        <Layout>
            <div className="container-fluid home">
                <h1 className="typo">Home</h1> 
                <h3 className="typo">Hola, {currentUser?.firstName}</h3>               
                <div className="row row-cols-3 g-5 p-3">
                    <div className="col">
                        <div className="card h-100">
                            <img src="/img/pikachu.png" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="/img/pikachu.png" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="/img/pikachu.png" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="/img/pikachu.png" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export  const Home = withAuth(HomePage) 