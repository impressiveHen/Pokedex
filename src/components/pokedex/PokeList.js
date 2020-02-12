import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import './Pokedex.css'

const PokeList = (props) => {
    return (
        <>  
            <div className='poke-list'>
                {props.collection.map(pokeData => {
                    return (
                        <div
                            className="card-wrapper"
                            key={pokeData.id}
                            onClick={() => {
                                props.handleShow({
                                    name: pokeData.name,
                                    image: pokeData.sprite,
                                    height: pokeData.height,
                                    weight: pokeData.weight,
                                    type: pokeData.type,
                                    move: pokeData.move
                                })
                            }}
                            style={{
                                width: "14rem",
                                marginLeft: "1.3rem",
                                marginTop: "1rem",
                            }}
                        >
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src={pokeData.sprite}
                                    style={{
                                        background: "#d6d6c2",
                                    }}
                                />
                                <Card.Body style={{width: '100%'}}>
                                    <ListGroup className="flush">
                                        <ListGroup.Item>{"Name: " + pokeData.name}</ListGroup.Item>
                                        <ListGroup.Item>{"Height: " + pokeData.height}</ListGroup.Item>
                                        <ListGroup.Item>{"Weight: " + pokeData.weight}</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </div>
                    );
                })}
            </div>

        </>
    )
}

export default PokeList;