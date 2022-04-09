import { FC, useEffect, useState } from "react"
import { Button, Card, Container, Row, Col } from "react-bootstrap"
import { useHistory, useParams } from "react-router-dom"
import { useItems } from "../../../hooks/useItems"
import { itemsApi } from "../../../api/moviesDB"
import { Trailer } from "../../../types/models"


type ParamsType = {
    id: string
}

const DetailCard: FC = () => {
    const { getDetail, itemDetail } = useItems()
    const { id } = useParams<ParamsType>()
    const { goBack } = useHistory()
    const [trailers, setTrailers] = useState<Trailer[]>([])

    useEffect(() => {
        getDetail(id)
    }, [])

    useEffect(() => {
        itemsApi
            .getTrailerTMDB(itemDetail?.id, itemDetail?.media_type!)
            .then((response) => setTrailers(response))

    }, [itemDetail])



    return (
        <Container className="cardContainer">
            <h2 className="typo">Detalle: <span className="cardTitle">{itemDetail?.title}</span></h2>
            <Card className="cardDetail">
                <Row>
                    <Col md="8">
                        <Card.Body>
                            <ul style={{ listStyle: "none" }}>
                                <li>
                                    <Card.Title className="cardTitle">Fecha de estreno:</Card.Title>
                                    <Card.Text className="cardTypo">{itemDetail?.release_date}</Card.Text>
                                </li>
                                <li>
                                    <Card.Title className="cardTitle">Descripción:</Card.Title>
                                    <Card.Text className="cardTypo">{itemDetail?.overview}</Card.Text>
                                </li>
                                <li>
                                    <Card.Title className="cardTitle">Idioma original: </Card.Title>
                                    <Card.Text className="cardTypo">{itemDetail?.original_language}</Card.Text>
                                </li>
                                <li>
                                <Card.Title className="cardTitle">Trailers: </Card.Title>
                                    {trailers?.map((trailer) => (
                                            <iframe
                                                width="560"
                                                height="315"
                                                src={`https://www.youtube.com/embed/${trailer.key}`}
                                                title="YouTube video player"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                    ))}
                                </li>
                            </ul>
                        </Card.Body>
                    </Col>


                    <Col md="4">
                        <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w500${itemDetail?.poster_path}`} />
                    </Col>
                </Row>
            </Card>
            <Button className="mt-4" variant="danger" onClick={goBack}> Atrás </Button>

        </Container>
    )
}

export { DetailCard }