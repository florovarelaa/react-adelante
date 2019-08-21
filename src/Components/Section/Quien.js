import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    color: #000000;
    height: 60vh;
    width: 100%;
`
const ContentContainer = styled.div`
    height: 80%;
    left: 50%;
    position: relative;
    text-align: center;
    top: 60%;
    transform: translate(-50%, -50%);
    width: 50%;
`

const Title = styled.h1`
    box-sizing: border-box;
    font-size: 50px;
    padding: 10px 0;
    margin: 0;
    `
    
const Content = styled.p`
    font-size: 20px;
    padding: 20px 0;
    margin: 0;
`

const Quien = () => {
    return (
        <Container>
            <ContentContainer>
                <Title>
                    Visión y Valores
                </Title>
                <Content>
                    Una organizacíon sin fines de Lucro, situada en Mar del Plata. Formada por Jovenes Voluntarios.
                </Content>
            </ContentContainer>
        </Container>
    )
}

export default Quien;