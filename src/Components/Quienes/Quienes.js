import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import Quien from './Quien';
import styled from 'styled-components';


//Quienes deberia ser nombrado a Section
const Quienes = () => (
    <div>
        <Quien />
        <Parallax
            blur={0}
            bgImage={require('../../Assets/Images/quienes_1.jpg')}
            bgImageAlt="Quienes Somos"
            strength={200}
        >
            {/* div to set transparent div dimensions where image will fit */}
            <div style={{ height: '50vh',
                          width: '100%',
                          backgroundColor: 'transparent',
                          position: 'relative',
                          bottom: '0',
                          left: '0'}}>
            </div>
        </Parallax>
    </div>
);
export default Quienes;