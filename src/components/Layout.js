import React from 'react';
import Container from 'react-bootstrap/Container';

const Layout = (props) => {
    return (
        // Bootstrap’s grid system uses a series of containers, rows, and columns to layout 
        // and align content.
        <Container>
            {props.children}
        </Container>
    );
}

export default Layout;