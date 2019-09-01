import React, { Component } from 'react';

import Backdrop from './Components/Backdrop/Backdrop';
import BackgroundVideo from './Components/BackgroundVideo/BackgroundVideo';
import LeftPanel from './Components/LeftPanel/LeftPanel';
import logo from './logo.jpg';
import Navbar from './Components/Navbar/Navbar';
import Quienes from './Components/Sections/Quienes/Quienes.js';
import styled from 'styled-components';
import ToolbarInfo from './Components/ToolbarInfo/ToolbarInfo';
import ToolbarContent from './Components/ToolbarContent/ToolbarContent';

const MainContainer = styled.div`
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.color};
`;

// Create a Section component that'll render a <section> tag with some styles
const Sec = styled.section`
  padding: 4em;
  background: ${props => props.background};
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
            <Quienes id='quienes'/>
            
            <Sec background="#20db33">
              <Title color="#db231f">
                ¿Que hacemos?
              </Title>
            </Sec>
            <Sec background="#db231f">
              <Title color="#e8f229">
                Donde Trabajamos
              </Title>
            </Sec>
          </SectionContainer>
        </MainContainer>
    );
  }
}

export default Main;