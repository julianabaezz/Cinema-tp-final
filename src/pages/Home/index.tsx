import { Layout } from "../../components";
import { withAuth } from "../../hoc";
import { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../contexts";
import { itemsApi } from "../../api/moviesDB";
import { Items } from "../../types/models";

const HomePage = () => {
    const{currentUser} = useContext(UsersContext)
    const {getItemsTMDB} = itemsApi

    const [items, setItems] = useState<Items[]>()

    useEffect(() =>{
        getItemsTMDB().then((response)=>{setItems(response)})
    }, [])

    return (
        <Layout>
            <div className="container-fluid home">
                <h1 className="typo">Home</h1> 
                <h3 className="typo">Hola, {currentUser?.firstName}</h3>               
                <div className="row row-cols-3 g-5 p-3">
                    {items?.map ((item) =>(
                    <div className="col" key={item.id}>
                        <div className="card h-100">
                            <img src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} className="card-img-top" alt="..."/>
                                <div className="card-body">                                    
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.overview}</p>
                                </div>
                        </div>
                    </div>                    


                    ))}
                </div>
            </div>
        </Layout>
    )
}

export  const Home = withAuth(HomePage) 