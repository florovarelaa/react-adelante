import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #f0f0f0;
    display: flex;
    height: 80%;
    left: 50%;
    position: relative;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    height: 80%;
    justify-content: center;
    margin: 0;
    padding: 20px 0;
    text-align: center;
    width: 50%;
`

const ImgContainer = styled.div`
    height: 80%;
    left: 0;
    margin: 0;
    padding: 0;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: 50%;
`

const Img = styled.img`
    height: 100%;
    object-fit: contain;
    width: 100%;
`

const Title = styled.h1`
    box-sizing: border-box;
    font-size: 50px;
    padding: 10px 0;
    margin: 0;
`

const Donde = props => (
    <Container>
        <Content>
            <Title>
                Donde Trabajamos
            </Title>
                <p>
                   Lunes 
                   Martes 
                   Miercoles
                   Jueves
                   Viernes
                   Sabados
                </p>
        </Content>
        <ImgContainer >
            <Img src={props.img} alt='Unavailable'/>
        </ImgContainer>
    </Container>
);

export default Donde;