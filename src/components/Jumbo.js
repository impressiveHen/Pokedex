import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import styled from 'styled-components';
import HeaderPokemon from '../assets/HeaderPokemon.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${HeaderPokemon}) no-repeat fixed bottom;
    background-size: cover;
    color: #FFD700;
    height: 470px;
    position: relative;
    // The z-index property specifies the stack order of an element.
    // An element with greater stack order is always in front of an element with a lower stack order.
    z-index: 1;
  }
  .overlay {
    background-color: #000;
    opacity: 0.2;
    // Absolute - the element is positioned absolutely to its first positioned parent.
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
  }
`;

const Jumbo = () => {
    return (
        <Styles>
            {/* fluid:  occupies the entire horizontal space of its parent. */}
            <Jumbotron fluid className='jumbo'>
                <div className="overlay"></div>
            </Jumbotron>
        </Styles>
    );
}

export default Jumbo;