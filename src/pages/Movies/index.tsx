import { Layout } from "../../components"
import { MovieCards } from "../../components/parts"
import { withAuth } from "../../hoc"


const MoviesPage  = () => {
    return(
        <Layout>
            <h2>Movies</h2>
            <MovieCards/>
        </Layout>
    )
}

export const Movies = withAuth(MoviesPage)

