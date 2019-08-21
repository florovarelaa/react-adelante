import React from 'react';

import styled from 'styled-components';

const LogoContainer = styled.div`
    height: 100%;
    margin: 0;
    padding: 0;

    img {
        border-radius: 50%;
        height: 90%;
        margin: 5% 0;
        width: auto;
    }

    @media screen and (max-width: 880px) {
    
        img {
            height: 70%;
            margin: 20% 0;
        }
    }
    
`;

const Logo = props => {
    return (
        <LogoContainer>
            <img src={props.logo} alt="Can't load Logo"/>
        </LogoContainer>
    )
}

export default Logo