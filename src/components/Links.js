import React from 'react';
import { FaInstagram, FaFacebookSquare, FaTwitterSquare, FaYoutube, FaHome } from 'react-icons/fa';
import { Row, Col } from 'react-bootstrap';
import LinksBack from '../assets/LinksBack.png';

const icon = {
    width: '4em',
    height: '4em'
}

const a = {
    margin: '1em',
    fontSize: '2em',
    fontWeight: 500
}

const Links = () => {
    return (
        <div style={{
            backgroundImage: `url(${LinksBack})`, 
            paddingTop: '1em',
            paddingLeft: '3em'
        }}>
            <Row>
                <Col md={4}><a style={a} href="https://www.pokemon.com/us/"><FaHome style={icon}/> Official</a></Col>
                <Col md={4}><a style={a} href="https://www.facebook.com/Pokemon/"><FaFacebookSquare style={icon}/> Facebook</a></Col>
                <Col md={4}><a style={a} href="https://www.instagram.com/pokemon/"><FaInstagram style={icon}/> Instagram</a></Col>
            </Row>
            <Row>
                <Col md={4}><a style={a} href="https://twitter.com/pokemon"><FaTwitterSquare style={icon}/> Twitter</a></Col>
                <Col md={4}><a style={a} href="https://www.youtube.com/user/pokemon"><FaYoutube style={icon}/> Youtube</a></Col>
            </Row>
        </div>
    );
}

export default Links;