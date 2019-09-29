import React from 'react';
import { Parallax } from 'react-parallax';
import styled from 'styled-components';

const Container = styled.div`
    background: white;
    position: relative;
    width: 90%;

    left: 50%;
    transform: translateX(-50%);
`

const SectionParallax = (props) => (
    <Container>
        {props.children}
        <Parallax
            blur={0}
            bgImage={props.img}
            bgImageAlt={props.imgAlt}
            strength={200}
            style={{width: '90%', left: '50%', transform: 'translateX(-50%)'}}
        >        
        {/* div to set transparent div dimensions where image will fit */}
        <div style={{ height: props.height,
                    width: '100%',
                    backgroundColor: 'transparent',
                    position: 'relative',
                    bottom: '0',
                    left: '0'}}>
        </div>
        </Parallax>
    </Container>
);
export default SectionParallax;