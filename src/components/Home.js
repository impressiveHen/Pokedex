import React, { useState } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';
import { 
    bulbasaurImage,
    bulbasaurName, 
    bulbasaurText, 
    charmanderImage,
    charmanderName,
    charmanderText,
    squirtleImage,
    squirtleName,
    squirtleText 
} from './constants/EvolutionData';

const Home = () => {
    const [bulbasaurLevel, setBulbasaurLevel] = useState(0);
    const [charmanderLevel, setCharmanderLevel] = useState(0);
    const [squirtleLevel, setSquirtleLevel] = useState(0);

    const handleBulbClick = () => {
        setBulbasaurLevel(prev => prev!==2 ? prev+1 : 0);
    }

    const handleCharClick = () => {
        setCharmanderLevel(prev => prev!==2 ? prev+1 : 0);
    }

    const handleSquClick = () => {
        setSquirtleLevel(prev => prev!==2 ? prev+1 : 0);
    }

    return (
        <div className="wrapper">
            <Container>
                <h1 className="text-warning w-50">START YOUR JOURNEY</h1>
                <Row className="text-center">
                    <Col xs={6} md={4} className="person-wrapper">
                        <div className="ball-bulbasaur">
                            <h3>{bulbasaurName[bulbasaurLevel]}</h3>
                            <div className="line_left"></div>
                            <Image src={bulbasaurImage[bulbasaurLevel]} roundedCircle className="profile-pic" />
                            <div className="line_right"></div>
                            <p>{bulbasaurText[bulbasaurLevel]}</p>
                        </div>
                        <Button 
                            variant="success" 
                            size="lg" 
                            className="middle"
                            onClick={handleBulbClick}
                        >
                            EVOLVE
                        </Button>
                    </Col>
                    <Col xs={6} md={4} className="person-wrapper">
                        <div className="ball-charmander">
                            <h3>{charmanderName[charmanderLevel]}</h3>
                            <div className="line_left"></div>
                            <Image src={charmanderImage[charmanderLevel]} roundedCircle className="profile-pic" />
                            <div className="line_right"></div>
                            <p>{charmanderText[charmanderLevel]}</p>
                        </div>
                        <Button 
                            variant="danger" 
                            size="lg" 
                            className="middle"
                            onClick={handleCharClick}
                        >
                            EVOLVE
                        </Button>
                    </Col>
                    <Col xs={6} md={4} className="person-wrapper">
                        <div className="ball-squirtle">
                            <h3>{squirtleName[squirtleLevel]}</h3>
                            <div className="line_left"></div>
                            <Image src={squirtleImage[squirtleLevel]} roundedCircle className="profile-pic" />
                            <div className="line_right"></div>
                            <p>{squirtleText[squirtleLevel]}</p>
                        </div>
                        <Button 
                            variant="primary" 
                            size="lg" 
                            className="middle"
                            onClick={handleSquClick}
                        >
                            EVOLVE
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;