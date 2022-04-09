import { FC, useContext, useEffect } from "react";
import { Card, Row, Col, Button, Container } from "react-bootstrap";
import { useItems } from "../../../hooks/useItems";
import { UsersContext } from "../../../contexts";
import { Link } from "react-router-dom";



const MovieCards: FC = () => {
    const { deleteItem, itemsFB, getItems } = useItems()
    const { currentUser } = useContext(UsersContext)


    useEffect(() => {
        getItems()
    }, [])

    return (
        <Container>
            <Row xs={1} md={5} className="g-6">

                {itemsFB?.map((item) => (   
                    
                    <Col key={item.idDB}>
                    {item.media_type !== 'tv' && (
                                <Card>
                                    <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text> {item.vote_average} </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        {currentUser?.role === 'admin' && (
                                            <Button variant="danger" onClick={() => { deleteItem(item.id) }}>Eliminar</Button>

                                        )}
                                        {currentUser?.role !== 'admin' && (

                                            <Link to={`/detail/${item.idDB}`} className="warning">Detalle</Link>

                                        )}

                                    </Card.Footer>
                                </Card>
                        )}
                    </Col>
                    ))}
            </Row>
        </Container>
    )}
export { MovieCards }