import React, { Component } from 'react';

import Backdrop from './Components/Backdrop/Backdrop';
import BackgroundVideo from './Components/BackgroundVideo/BackgroundVideo';
import Donde from './Components/Sections/Donde/Donde';
import LeftPanel from './Components/LeftPanel/LeftPanel';
import logo from './logo.jpg';
import Navbar from './Components/Navbar/Navbar';
import Quienes from './Components/Sections/Quienes/Quienes.js';
import Que from './Components/Sections/Que/Que.js';
import imageQue from './Assets/Images/que_1.jpg';
import imageDonde from './Assets/Images/donde_1.jpg';
import styled from 'styled-components';
import Section from './Components/Sections/Section';
import ToolbarInfo from './Components/ToolbarInfo/ToolbarInfo';
import ToolbarContent from './Components/ToolbarContent/ToolbarContent';

const MainContainer = styled.div`
`;

const SectionContainer = styled.div`
`;

class  Main extends Component {
  state = {
    sections: ['quienes somos', 'que hacemos', 'donde trabajamos', 'nuestras campañas', 'voluntarios', 'como colaborar'],
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
          <ToolbarContent
            logo={logo}
          />
          <Navbar 
            sections={this.state.sections}
            leftPanelClickHandler={this.leftPanelToggleClickHandler}
          />
          <LeftPanel sections={this.state.sections} show={this.state.leftPanelOpen}/>
          {backdrop}
          <BackgroundVideo />
          {/* contains all sections */}
          <SectionContainer>
            <Section height='110vh'>
              <Quienes id='quienes'/>
            </Section>

            <Section height='100vh'>
              <Que img={imageQue}/>
            </Section>

            <Section height='100vh'>
              <Donde img={imageDonde}/>
            </Section>
            
            <Section height='110vh'>
              Campañas
            </Section>

            <Section height='100vh'>
              Voluntarios
            </Section>

            <Section height='100vh'>
              Como Colaborar
            </Section>
          </SectionContainer>
        </MainContainer>
    );
  }
}

export default Main;