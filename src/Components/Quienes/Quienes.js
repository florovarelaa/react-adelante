import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import styled from 'styled-components';


//Quienes deberia ser nombrado a Section
const Quienes = () => (
    <div>
        <div>
            <p>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently wi</p>
            <p>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently wi</p>
        </div>
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