import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    color: #ffffff;
    background-color: #808080;
    display: flex;
    height: 90%;
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

const VideoContainer = styled.div`
    height: 80%;
    left: 0;
    margin: 0 15px;
    padding: 0;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: 50%;

    video {
        height: 100%;
        
        /* Center the video */
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%,-50%);
      }
`

const Video = styled.video`
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

const TextContainer = styled.p`
    margin: 0px 10px;
`

const SectionLeftVideoRightText = props => (
    <Container>
        <VideoContainer >
            <video id="" loop autoPlay muted>
                <source src={props.video} type="video/mp4" />
                <source src={props.video} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        </VideoContainer>
        <Content>
            <Title>
                {props.title}
            </Title>
            <TextContainer>
                {props.text}
            </TextContainer>
        </Content>
    </Container>
);

export default SectionLeftVideoRightText;