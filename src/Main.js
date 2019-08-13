import React, { Component } from 'react';

import Backdrop from './Components/Backdrop/Backdrop';
import LeftPanel from './Components/LeftPanel/LeftPanel';
import logoNavbar from './logoNavbar.jpg';
import Navbar from './Components/Navbar/Navbar';
import styled from 'styled-components';

const MainContainer = styled.div`
`;

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

const SectionContainer = styled.div`
  margin-top: 66px;
`;

class  Main extends Component {
  state = {
    sections: ['quienes', 'que', 'donde', 'encuentro', 'campaña', 'sonrisas', 'cumpleaños', 'voluntarios'],
    leftPanelOpen: false,
  }

  //if backdrop is clicked, left panel is always closed.
  backdropClickHandler = () => {
    this.setState({leftPanelOpen: false})
  }

  //function that will be passed to the hamburguer menu.
  leftPanelToggleClickHandler = () => {
    this.setState( prevState => {
      return { 
        leftPanelOpen: !prevState.leftPanelOpen 
      };
    });
  };

  render () {
      //backdrop is a best practice name for modals/panels background.
      let backdrop;

      //if left panel is opened, it renders the backdrop, else it does not.
      if (this.state.leftPanelOpen) {
        backdrop = <Backdrop click={this.backdropClickHandler}/>;
      }

      return (
        <MainContainer>
          <Navbar 
            logo={logoNavbar}
            sections={this.state.sections}
            leftPanelClickHandler={this.leftPanelToggleClickHandler}
          />
          <LeftPanel sections={this.state.sections} show={this.state.leftPanelOpen}/>
          {backdrop}
          <SectionContainer>
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
          </SectionContainer>
        </MainContainer>
    );
  }
}

export default Main;