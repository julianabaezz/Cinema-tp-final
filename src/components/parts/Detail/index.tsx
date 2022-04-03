import { FC, useEffect, useState } from "react"
import { Button, Card, Container, Row, Col } from "react-bootstrap"
import { useHistory, useParams } from "react-router-dom"
import { mapToArray } from "../../../helpers"
import { useItems } from "../../../hooks/useItems"
import { Items } from "../../../types/models"
import {itemsApi} from "../../../api/moviesDB"

type ParamsType= {
    id: string
}

const DetailCard: FC = () => {
    const {getItem } = itemsApi
    const [item, setItem] = useState<Items>()
    const { id } = useParams<ParamsType>()
    const {goBack} = useHistory()

    useEffect(() => {
        getItem(id).then((response) => { setItem(response)})
    }, [])


    return (
        <Container className="cardContainer">
                <h2 className="typo">Detalle: <span className="cardTitle">{item?.title}</span></h2>
                <Card className= "cardDetail">
                <Row>
                    <Col md="8">
                    <Card.Body>
                        <ul style={{listStyle:"none"}}>
                            <Card.Title className="cardTitle">Fecha de estreno:</Card.Title>
                            <li>
                                <Card.Text className="cardTypo">{item?.release_date}</Card.Text>
                            </li>
                            <Card.Title className="cardTitle">Descripción:</Card.Title>
                            <li>
                                <Card.Text className="cardTypo">{item?.overview}</Card.Text>
                            </li>
                        </ul>
                    </Card.Body>
                    </Col>
                    <Col md="3">
                    <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w500${item?.poster_path}`} />
                    </Col>

                </Row>
                </Card>
            <Button className="mt-4" variant= "danger" onClick={goBack}> Atrás </Button>

        </Container>
    )
}

export { DetailCard }