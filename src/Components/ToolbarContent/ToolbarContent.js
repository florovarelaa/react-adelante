import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo/Logo';

const BtnContainer = styled.div`
    height: 100%;
    width: 45%;
`

const BtnDonate = styled.button`
    border-radius: 10px;
    border: none;
    height: 50%;
    font-family: montserrat;
    font-size: 23px;
    margin: 0;
    padding: 0;
    text-transform: capitalize;
    width: 50%;

    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    :hover {
        color: #00aa00;
    }

    @media screen and (max-width: 880px) {
        font-size: 16px;
        margin-left: 10%;
    }
`;

const Container = styled.div`
    background: #afafaf;
    color: #000000;
    display: flex;
    height: 110px;
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
    font-size: 23px;
    height: 100%;
    margin: 0;
    padding: 0;
    text-shadow: 0 2px 5px rgba(0,0,0,1);
    text-transform: capitalize;
    width: 40%;

    div {
        position: relative;
        top: 50%;
        left: 75%;
        transform: translate(-50%, -50%);
    }
    
    @media screen and (max-width: 880px) {
        font-size: 20px;
        font-weight: 400;
        left: 50%;
        text-shadow: 0 3px 5px rgba(0,0,0,1);
    }
`

const ToolbarContent = (props) => {
    return(
        <Container>
            <LogoWrapper>
                <Logo logo={props.logo} />
            </LogoWrapper>
            <Slogan>
                <div>
                    el amor todo <br />lo transforma
                </div>
            </Slogan>
            <BtnContainer>
                <BtnDonate>
                    dona ahora
                </BtnDonate>
            </BtnContainer>
        </Container>
    )
}

export default ToolbarContent;