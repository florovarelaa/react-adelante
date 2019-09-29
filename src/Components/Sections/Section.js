import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background: transparent;
    height: ${props => props.height ? props.height : '100vh'}
    position: relative;

    width: 90%;
    left: 50%;
    transform: translateX(-50%);
`;

const Section = props => {
    return(
        <Container height={props.height}>
            {props.children}
        </Container>
    )
}

export default Section;