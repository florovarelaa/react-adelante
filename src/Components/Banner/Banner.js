import React, {Component} from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
    background: #f0f0f000;
    color: white;
    height: 40%;
    left: 3%;
    position: relative;
    text-shadow: 0 3px 4px rgba(0,0,0,1);
    top: 50%;
    width: 80%;
    
    @media screen and (max-width: 880px) {
        text-shadow: 0 1.5px 4px rgba(0,0,0,1);
    }
`;

const BannerHeader = styled.h1`
    font-size: 70px;
    margin: 0;
    padding: 0;

    @media screen and (max-width: 880px) {
        font-size: 40px;
    }
`;

const BannerContent = styled.p`
    font-size: 40px;

    @media screen and (max-width: 880px) {
        font-size: 20px;
    }
`;

class Banner extends Component {
    render (){
        return (
            <ContentContainer>
                <BannerHeader>
                    Jóvenes Voluntarios
                </BannerHeader>
                <BannerContent>
                    Colaboración, Contención, Escucha y Esperanza
                </BannerContent>
            </ContentContainer>
        )
    }
}

export default Banner;