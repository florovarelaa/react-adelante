import React from 'react';
import { Parallax } from 'react-parallax';

const SectionParallax = (props) => (
    <div style={{position: 'relative'}}>
        {props.children}
        <Parallax
            blur={0}
            bgImage={props.img}
            bgImageAlt={props.imgAlt}
            strength={200}
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
    </div>
);
export default SectionParallax;