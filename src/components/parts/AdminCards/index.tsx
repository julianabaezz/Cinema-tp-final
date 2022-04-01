import { itemsApi } from "../../../api/moviesDB";
import { useEffect, useState } from "react";
import { Items } from "../../../types/models";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useItems } from "../../../hooks/useItems";

const AdminCards = () => {

    const {addItem} = useItems()
    const { getItemsTMDB } = itemsApi

    const [items, setItems] = useState<Items[]>()


    useEffect(() => {
        getItemsTMDB().then((response) => { setItems(response)})
    }, [])

    return (

        <div>
        <Row xs={1} md={5} className="g-6">
            {items?.map((item) => (
                <Col key={item.idDB}>
                <Card>
                    <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text> {item.vote_average} </Card.Text>
                        <Button variant="primary" onClick={() => {addItem(item)}}>Agregar</Button>
                    </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
        </div>
    )
}

export { AdminCards }