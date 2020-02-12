import React, { useEffect, useState } from 'react';
import { Container, Modal, Image, ListGroup, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import PokeList from './pokedex/PokeList';
import * as pokedexActions from './pokedex/actions/PokedexActions';
import SearchForm from './SearchForm';

const Search = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.pokedex.isLoading);
    const collection = useSelector(state => state.pokedex.collection);

    const [show, setShow] = useState(false);
    const [pokeDetail, setPokeDetail] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = (pokeDetail) => {
        setPokeDetail(pokeDetail);
        setShow(true);
    }

    const searchName = (name) => {
        dispatch(pokedexActions.filterNames(name));
    }

    const reload = () => {
        dispatch(pokedexActions.fetchLimitNames(200));
    }

    useEffect(() => {
        dispatch(pokedexActions.fetchLimitNames(200))
    }, [dispatch])

    if (isLoading) {
        return (
            <div>
                <Container>
                    <h1 style={{ textAlign: 'center' }}>
                        Loading Data...
                    </h1>
                </Container>
            </div>
        )
    }

    return (
        <div>
            <SearchForm searchName={searchName} reload={reload} />
            <PokeList
                collection={collection}
                handleShow={handleShow}
            />
            <Modal show={show} onHide={handleClose} size="md" centered>
                <Modal.Header
                    closeButton
                >
                    <Modal.Title
                        style={{
                            color: '#8B4513'
                        }}>
                        {pokeDetail ? pokeDetail.name : null}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Row className="show-grid">
                        <Col xs={6} md={6}>
                            <Image
                                src={pokeDetail ? pokeDetail.image : null}
                                thumbnail
                                style={{
                                    width: 250
                                }}
                            />
                        </Col>
                        <Col xs={6} md={6}>
                            <ListGroup className="flush">
                                <ListGroup.Item>{pokeDetail ? "Height: " + pokeDetail.height : null}</ListGroup.Item>
                                <ListGroup.Item>{pokeDetail ? "Weight: " + pokeDetail.weight : null}</ListGroup.Item>
                                <ListGroup.Item>{pokeDetail ? "Move: " + pokeDetail.move : null}</ListGroup.Item>
                                <ListGroup.Item>{pokeDetail ? "Type: " + pokeDetail.type : null}</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>


                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Search;