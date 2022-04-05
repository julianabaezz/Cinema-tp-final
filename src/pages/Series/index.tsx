import { FC } from "react"
import { Layout } from "../../components"
import { TvCards } from "../../components/parts/TvCards"
import { withAuth } from "../../hoc"

const SeriesPage: FC  = () => {
    return(
        <Layout>
            <h2>Series</h2>
            <div>
                <TvCards/>
            </div>
        </Layout>
    )
}

export const Series = withAuth(SeriesPage)