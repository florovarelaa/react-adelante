import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 60vh;
    width: 100%;
`
const ContentContainer = styled.div`
    height: 90%;
    left: 50%;
    position: relative;
    text-align: center;
    top: 60%;
    transform: translate(-50%, -50%);
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

const Quienes = (props) => {
    return (
        <Container>
            <ContentContainer>
                <Title>
                    {props.title}
                </Title>
                <Content>
                    {props.text}
                </Content>
            </ContentContainer>
        </Container>
    )
}

export default Quienes;