import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background: ${props => props.backgroundColor ? props.backgroundColor : 'white'};
    height: ${props => props.height ? props.height : '100vh'};
    margin: 5% 0%;
    position: relative;

    width: 90%;
    left: 50%;
    transform: translateX(-50%);
`;

const Section = props => {
    return(
        <Container height={props.height} backgroundColor={props.backgroundColor}>
            {props.children}
        </Container>
    )
}

export default Section;