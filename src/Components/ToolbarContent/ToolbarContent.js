import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo/Logo';

const BtnContainer = styled.div`
    height: 100%;
    width: 45%;
`

const BtnDonate = styled.button`
    border-radius: 20px;
    border: 3px solid grey;
    height: 70px;
    font-family: montserrat;
    font-size: 30px;
    margin: 0;
    outline: none;
    padding: 0;
    text-transform: capitalize;
    width: 250px;

    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);

    :hover {
        color: #00aa00;
        cursor: pointer;
    }

    @media screen and (max-width: 880px) {
        font-size: 16px;
        margin-left: 10%;
    }
`;

const Container = styled.div`
    background: #e2e2e2;
    color: #000000;
    display: flex;
    height: 200px;
    position: relative;
    width: 100%;
    z-index: 100;

    @media screen and (max-width: 880px) {
        font-size: 16px;
    }
`;

const LogoWrapper = styled.div`
    display: flex;
    height: 100%;
    justify-content: flex-end;
    margin-left: 5%;
    padding: 0;
    width: 10%;

    @media screen and (max-width: 880px) {
        height: 100%;
        margin-left: 15%;
    }
`

const Slogan = styled.div`
    font-size: 20px;
    height: 100%;
    margin: 0;
    padding: 0;
    text-shadow: 0 2px 5px rgba(0,0,0,1);
    text-transform: capitalize;
    width: 20%;

    p {
        position: relative;
        left: 10%;
        margin: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    
    @media screen and (max-width: 880px) {
        font-size: 20px;
        font-weight: 400;
        left: 50%;
        text-shadow: 0 3px 5px rgba(0,0,0,1);
    }
`

const Title = styled.p`
    font-size: 90px;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    
    span {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        display: inline-block;
        vertical-align: middle;
    }
`

const ToolbarContent = (props) => {
    return(
        <Container>
            <LogoWrapper>
                <Logo logo={props.logo} />
            </LogoWrapper>
            <Slogan>
                <p>el amor todo<br/> lo transforma</p>
            </Slogan>
            <Title>
                <span>adelante</span>
            </Title>
            <BtnDonate>
                dona ahora
            </BtnDonate>
        </Container>
    )
}

export default ToolbarContent;