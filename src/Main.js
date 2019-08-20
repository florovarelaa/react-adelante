import React, { Component } from 'react';

import Backdrop from './Components/Backdrop/Backdrop';
import BackgroundVideo from './Components/BackgroundVideo/BackgroundVideo';
import LeftPanel from './Components/LeftPanel/LeftPanel';
import logoNavbar from './logoNavbar.jpg';
import Navbar from './Components/Navbar/Navbar';
import Quienes from './Components/Quienes/Quienes';
import styled from 'styled-components';
import ToolbarInfo from './Components/ToolbarInfo/ToolbarInfo';

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
          <ToolbarInfo />
          {/* <Navbar 
            logo={logoNavbar}
            sections={this.state.sections}
            leftPanelClickHandler={this.leftPanelToggleClickHandler}
          /> */}
          <LeftPanel sections={this.state.sections} show={this.state.leftPanelOpen}/>
          {backdrop}
          <SectionContainer>
            <BackgroundVideo />
            <Quienes id='quienes' styles={{height: '100%', width:'100%'}}/>
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
          </SectionContainer>
        </MainContainer>
    );
  }
}

export default Main;