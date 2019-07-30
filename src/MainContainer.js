import React, { Component } from 'react';

import logoNavbar from './logoNavbar.jpg';
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

class  MainContainer extends Component {
  state = {
    sections: ['quienes', 'que', 'donde', 'encuentro', 'campaña', 'sonrisas', 'cumpleaños', 'voluntarios']
  }

  render () {
      return (
        <div className="App">
          <Navbar logo={logoNavbar} sections={this.state.sections}>
            {/* {this.state.sections}
            {this.state.sections.map( e => 
              <a href={e.toLowerCase}>
                {e}
              </a>
            )} */}
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
}

export default MainContainer;