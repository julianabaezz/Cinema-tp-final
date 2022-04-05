import { FC } from "react"
import { Layout } from "../../components"
import { DetailCard } from "../../components/parts"
import { withAuth } from "../../hoc"

const DetailPage: FC  = () => {
    return(
        <Layout>
            <DetailCard/>
        </Layout>
        
        )
}

export const Detail = withAuth(DetailPage)