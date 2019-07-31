import React from 'react';

import styled from 'styled-components';

const LogoContainer = styled.div`
    height: 80%;
    margin: 0 0.5rem;
    width: auto;

    img {
        width: auto;
        height: 90%;
        justify-self: left;
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