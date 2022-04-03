
import { useContext, useEffect, useState } from "react";
import { Items } from "../../../types/models";
import { Card, Row, Col, Button } from "react-bootstrap";
import { useItems } from "../../../hooks/useItems";
import { UsersContext } from "../../../contexts";
import { Link } from "react-router-dom";


const UserCards = () => {
    const { getItems, deleteItem } = useItems()
    const { currentUser } = useContext(UsersContext)


    const [items, setItems] = useState<Items[]>()


    useEffect(() => {
        getItems().then((response) => { setItems(response)})
    }, )

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
                            </Card.Body>
                            <Card.Footer>
                                {currentUser?.role !== 'admin' && (
                                    <Button variant="danger" onClick={() => { deleteItem(item.id)}}>Eliminar</Button>

                                )}
                                {currentUser?.role === 'admin' && (

                                    <Link to={`/detail/${item.idDB}`} className="warning">Detalle</Link>

                                )}

                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>

    )
}

export { UserCards }