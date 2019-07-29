import React from 'react';

import Navbar from './Components/Navbar/Navbar';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.color};
`;

// Create a Section component that'll render a <section> tag with some styles
const Section = styled.section`
  padding: 4em;
  background: ${props => props.background};
`;

// campañas
// sonrisas
// cumpleaños
// voluntarios

function MainContainer() {
  return (
    <div className="App">
        <Navbar>
          <a href="google.com">Item 1</a>
          <a href="google.com">Item 2</a>
          <a href="google.com">Item 3</a>
        </Navbar>
        <div>
          <Section background="#e8f229">
            <Title color="#20db33">
              ¿Quienes Somos?
            </Title>
          </Section>
          <Section background="#20db33">
            <Title color="#db231f">
              ¿Que hacemos?
            </Title>
          </Section>
          <Section background="#db231f">
            <Title color="#e8f229">
              Donde Trabajamos
            </Title>
          </Section>
          <Section background="#e8f229">
            <Title color="#db231f">
              Encuentro Anual
            </Title>
          </Section>
          <Section background="#20db33">
            <Title color="#e8f229">
              Campaña
            </Title>
          </Section>
          <Section background="#db231f">
            <Title color="#20db33">
              Sonrisas
            </Title>
          </Section>
          <Section background="#e8f229">
            <Title color="#20db33">
              Cumpleaños
            </Title>
          </Section>
          <Section background="#20db33">
            <Title color="#db231f">
              Voluntarios
            </Title>
          </Section>
        </div>
    </div>
  );
}

export default MainContainer;