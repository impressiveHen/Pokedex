import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
// https://www.styled-components.com/docs/basics
// styled-components is the result of wondering how we could enhance CSS for 
// styling React component systems.
import styled from 'styled-components';
import PokeLogo from '../assets/PokeLogo.png';

const MyNavbar = styled.div`
    .navbar {
        background-color: Black;
        opacity: 0.8;
        z-index: 99999;
        font-family: 'Righteous', cursive;
    }

    // navbar-brand: the title
    .navbar-brand, .navbar-nav, .nav-link {
        color: Plum;
        // both navbar-brand and .navbar-nav, .nav-link with set hover 
        &:hover {
            color: red;
        } 
    }
`;

const NavigationBar = () => {
    return (
        <MyNavbar>
            {/* expand: The breakpoint, below which, the Navbar will collapse.  */}
            <Navbar collapseOnSelect expand="lg" variant="Plum" fixed='top'>
                <Navbar.Brand href="#">
                    <img src={PokeLogo} style={{ width: 30, height: 30, marginRight: 10}} alt="logo" />
                    POKEDEX
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {/* ml-auto: move all flex items to one side (left)*/}
                    <Nav className="ml-auto">
                        <Nav.Link href="#/">Home</Nav.Link>
                        <Nav.Link href="#search">Search</Nav.Link>
                        <Nav.Link href="#links">Links</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </MyNavbar>
    );
}

export default NavigationBar;