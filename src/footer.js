import React from 'react';
//import './styles/index.css';
import './styles/flexbox-style.css';
import { StyledThankYou } from './styled-components/thankyou.js';

function Footer(props){
    return(
        /*<span>Gracias por visitarnos.</span>*/
        <StyledThankYou as="a" href="/">
            ¡Gracias por visitarnos!
        </StyledThankYou>
    );
}

export default Footer;