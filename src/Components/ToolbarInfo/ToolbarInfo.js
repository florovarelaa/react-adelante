import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background: #f5e042;
    font-family: sans-serif;
    font-size: 20px;
    height: 60px;
    position: relative;
    width: 100%;
    z-index: 100;

    a {
        color: black;
    }

    @media screen and (max-width: 880px) {
        font-size: 16px;
    }
`;

const Col40 = styled.div`
    display: flex;
    margin: 0;
    width: 40%;

    @media screen and (max-width: 880px) {
        display: flex;
        flex-direction: column;
        width: 60%;
    }
`;
    
const Col60 = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 0;
    width: 60%;
`;

const Wrapper = styled.div`
    align-items: center; 
    display: flex;
    height: 100%;
    margin: 0;
    padding: 0 5%;
    width: 90%;

    ul {
        display: inline-block;
        list-style-type: none;
        margin: 0;
        padding: 0;
        width: 100%;
    }

    ul li {
        display: inline-block;
        margin: 0 2%;
        width: fit-content;
    }
`;

const ToolbarInfo = () => {
    return (
        <Container>
            <Wrapper>
                <Col40>
                    <ul>
                        <li>
                            <i className="fa fa-phone"> (0223) 482 8312</i>
                        </li>
                        <li>
                            <i className="fa fa-envelope"> info@adelante.com</i>
                        </li>
                    </ul>
                </Col40>
                <Col60>
                    <a href='https://www.instagram.com/adelante.mdp/' rel='noopener noreferrer' target='_blank'>
                        <i className="fa fa-instagram"> Instagram</i>
                    </a>
                </Col60>
            </Wrapper>
        </Container>
    )
}

export default ToolbarInfo;