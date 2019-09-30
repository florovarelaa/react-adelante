import React, { Component } from 'react';

import Backdrop from './Components/Backdrop/Backdrop';
import BackgroundVideo from './Components/BackgroundVideo/BackgroundVideo';
import LeftPanel from './Components/LeftPanel/LeftPanel';
import Logo from './Components/Logo/Logo';
import logo from './logo.jpg';
import Navbar from './Components/Navbar/Navbar';
import RoundMedal from './Components/RoundMedal';

import imageCampanias from './Assets/Images/campañas_1.jpg'
import imageQuienes from './Assets/Images/quienes_1.jpg';
import imageQue from './Assets/Images/que_1.jpg';
import imageDonde from './Assets/Images/donde_1.jpg';
import videoSection from './Assets/Videos/BackgroundVideo1.mp4';

import Section from './Components/Sections/Section';
import SectionParallax from './Components/SectionParallax/SectionParallax.js';
import SectionLeftTextRightImage from './Components/Sections/SectionLeftTextRightImage/SectionLeftTextRightImage';
import SectionLeftVideoRightText from './Components/Sections/SectionLeftVideoRightText/SectionLeftVideoRightText';
import SectionTopTitleBottomText from './Components/Sections/SectionTopTitleBottomText/SectionTopTitleBottomText';
import SectionWithColumns from './Components/Sections/SectionWithColumns/SectionWithColumns';

import styled from 'styled-components';
import ToolbarInfo from './Components/ToolbarInfo/ToolbarInfo';
import ToolbarContent from './Components/ToolbarContent/ToolbarContent';

import Que from './Components/Sections/Que/Que';
import Donde from './Components/Sections/Donde/Donde';

const MainContainer = styled.div`
`;

const SectionContainer = styled.div`
`;

class  Main extends Component {
  state = {
    sections: ['quienes somos', 'que hacemos', 'campañas', 'sumate', 'avales'],
    campaigns: [
          {
            title: 'Navidad y Reyes',
            text: 'Algun Texto de Navidad y Reyes',
            color: '#44AA00',
          },
          {
            title: 'Abrigo',
            text: 'Algun Texto de Abrigo',
            color: '#228B22',
          },
          {
            title: 'Vuelta a clases',
            text: 'Algun Texto de Vuelta a Clases',
            color: '#008000',
          },
          {
            title: 'Dia del niño',
            text: 'Algun Texto de Dia del niño',
            color: '#006400',
          }
    ],
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
          {/* <Logo logo={logo} /> */}

          {/* contains all sections */}
          <SectionContainer>

            <Section height='110vh'>
              <SectionLeftTextRightImage title='Quienes Somos' text={text} img={imageQuienes}/>
            </Section>
            
            <Section height='110vh' backgroundColor='#808080'>
              <SectionLeftVideoRightText title='Titulo' text={text} video={videoSection}/>
            </Section>
            
            <Section height='140vh'>
              <SectionParallax img={imageCampanias} height='70vh' width=''>
                <SectionTopTitleBottomText title='Que Hacemos' text={text}/>
              </SectionParallax>
            </Section>

            <Section height='90vh'>
              <RoundMedal>Campañas</RoundMedal>
              <SectionWithColumns items={this.state.campaigns}/>
            </Section> 

          </SectionContainer>
        </MainContainer>
    );
  }
}

const text = 'A multi line long text. A multi line long text. A multi line long text. A multi line long text. A multi line long text. A multi line long text. A multi line long text. A multi line long text. A multi line long text. A multi line long text. A multi line long text. A multi line long text. A multi line long text. A multi line long text. A multi line long text. A multi line long text. A multi line long text. A multi line long text. A multi line long text. A multi line long text. A multi line long text. A multi line long text. A multi line long text. A multi line long text. A multi line long text. A multi line long text. A multi line long text. A multi line long text. A multi line long text. A multi line long text. ';

export default Main;