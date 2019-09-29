import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 90%;
    left: 50%;
    position: relative;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 90%;

`;

const Column = props => {
    return(
        <div style={{
            height: '100%', 
            width: '25%',
            textAlign: 'center',
            backgroundColor: props.color
            }}>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    )
}

const SectionWithColumns = props => {
    return (
        <Container>
            {props.items.map(e => 
                <Column 
                    title={e.title}
                    text={e.text}
                    color={e.color}
                />
            )}
        </Container>
    )
}

export default SectionWithColumns;