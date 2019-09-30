import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background: #808080;
    border-radius: 40px;
    border: 3px solid #A5A5A5;
    height: 180px;
    left: 50%;
    margin: 0;
    position: absolute;
    transform: translateX(-50%);
    top: -140px;
    width: 50%;
    z-index: 1;

    p {
        font-size: 70px;
        margin: 0;
        padding: 0;

        text-align: center;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
`;

const RoundMedal = props => {
    return (
        <Container>
            <p>
                {props.children}
            </p>
        </Container>
    )
};

export default RoundMedal;