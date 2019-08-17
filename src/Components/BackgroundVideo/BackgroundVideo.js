import React, {Component} from 'react';
import Banner from '../Banner/Banner';
import styled from 'styled-components';
import Video from '../../Assets/Videos/BackgroundVideo1.mp4';

//useful container for making a responsive video
const VideoContainer = styled.div`
        position: absolute;
        top: 0;
        bottom: 0;
        height: 100vh; 
        overflow: hidden;
        width: 100vw;

        video {
            /* Make video to at least 100% wide and tall */
            min-height: 100%; 
            min-width: 100%; 
            
            /* Setting width & height to auto prevents the browser from stretching or squishing the video */
            height: auto;
            width: auto;
            
            /* Center the video */
            left: 50%;
            position: absolute;
            top: 50%;
            transform: translate(-50%,-50%);
          }
`;

const VideoContentContainer = styled.div`
    background: rgba(0, 0, 0, .2);
    height: 100%;
    position: relative;
    width: 100%;
`;

class BackgroundVideo extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: Video
        }
    }

    render () {
        return (
            <div style={{ height: '100vh', width: '100vw'}}>
                <VideoContainer>
                    <video id="background-video" loop autoPlay muted>
                        <source src={this.state.videoURL} type="video/mp4" />
                        <source src={this.state.videoURL} type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                </VideoContainer>
                <VideoContentContainer>
                    <Banner />
                </VideoContentContainer>
            </div>
        )
    }
};

export default BackgroundVideo;