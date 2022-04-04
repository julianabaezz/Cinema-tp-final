// import { itemsApi } from "../../../api/moviesDB";
// import { useEffect } from "react";
import { Card, Button, Row, Col, } from "react-bootstrap";
import { useItems } from "../../../hooks/useItems";
import { Pagination } from "../Pagination"
import { SearchItems } from "../Search";

const AdminCards = () => {

    const { addItem, items, setSearchParams } = useItems()
    return (
        <div>
            <div className="form-label m-3 p-3">
                <SearchItems handleChange={setSearchParams} />
            </div>
            <Row xs={1} md={5} className="g-6">
                {items?.results.map((item) => (
                    <Col key={item.idDB}>
                        <Card>
                            <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text> {item.vote_average} </Card.Text>
                                <Button variant="primary" onClick={() => { addItem(item) }}>Agregar</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                ))}
            </Row>
            <Pagination />

        </div>
    )
}

export { AdminCards }