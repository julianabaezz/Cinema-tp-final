import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { FC, useContext, useEffect } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { useItems } from "../../../hooks/useItems";
import { UsersContext } from "../../../contexts";
import { Link } from "react-router-dom";

const UserCards: FC = () => {
    const { deleteItem, displayItemsFB, addItemViewed, deleteItemViewed, itemsViewed, itemsFB } = useItems()
    const { currentUser } = useContext(UsersContext)


    useEffect(() => {
        displayItemsFB()
    }, [])

    return (
        <div>
            <Row xs={1} md={5} className="g-6">

                {itemsFB?.map((item) => (
                    <Col key={item.idDB}>
                        <Card>
                            <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} />
                            <Card.Body>
                                {item.media_type === 'tv' && (
                                    <Card.Title>{item.name}</Card.Title>
                                )}
                                {item.media_type !== 'tv' && (
                                    <Card.Title>{item.title}</Card.Title>
                                )}
                                <Card.Text> {item.vote_average} </Card.Text>
                            </Card.Body>
                                {currentUser?.role !== 'admin' && (
                                
                                    <Link to={`/detail/${item.idDB}`} className="warning">Detalle</Link>
                                
                                )}
                            <Card.Footer>
                                {currentUser?.role === 'admin' && (
                                    <Button variant="danger" onClick={() => { deleteItem(item.id) }}>Eliminar</Button>

                                )}
                                {currentUser?.role !== 'admin' && !itemsViewed(currentUser, item.id) &&

                                    <Button variant="warning" onClick={() => addItemViewed(currentUser, item.id)}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></Button>

                                }
                                {currentUser?.role !== 'admin' && itemsViewed(currentUser, item.id) &&

                                    <Button variant="warning" onClick={() => deleteItemViewed(currentUser, item.id)}><FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon></Button>

                                }


                            </Card.Footer>
                        </Card>
                    </Col>
                )


                )}
            </Row>
        </div>

    )
}

export { UserCards }