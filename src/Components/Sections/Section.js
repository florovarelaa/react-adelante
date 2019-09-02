import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: ${props => props.height}
    position: relative;
`;

const Section = props => {
    return(
        <Container height={props.height}>
            {props.children}
        </Container>
    )
}

export default Section;