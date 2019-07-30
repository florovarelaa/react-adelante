import React from 'react';

import styled from 'styled-components';

const Header = styled.header`
    background: #000000;
    display: flex;
    height: 56px;
    justify-content: space-around;
    left: 0;
    padding: 1%;
    position: fixed;
    top: 0;
    width: 100%;
`;

const HeaderWrapper = styled.div`
    height: 30%;
    position: relative;
`;

const ItemsNavigation = styled.div`
    justify-self: flex-end;
    margin-left: auto
    margin-right: 5%;
    position: relative;
`;

const NavigationContainer = styled.div`
    align-items: center;
    display: flex;
    font-size: 1rem;
    height: 100%;
    width: 100%;
`;

const ItemsNavigationList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;

    a {
        color: #f0f0f0;
        font-family: 'Dancing Script', cursive;
        text-decoration: none;
        text-transform: capitalize;
        padding: 0 1rem;
    }

    a:hover {
        color: #878787;
    }
`;

const Logo = styled.div`
    height: 80%;
    width: auto;

    img {
        width: auto;
        height: 90%;
        justify-self: left;
    }
`;

function Navbar (props) {
    return (
        <HeaderWrapper>
            <Header>
                <NavigationContainer>
                    <Logo>
                        <img src={props.logo} alt="Can't load Logo"/>
                    </Logo>
                    <ItemsNavigation>
                        <ItemsNavigationList>
                            {props.sections.map( (item, index) => 
                                <a key={index} href={`${item.toLowerCase}`}>
                                    {item}
                                </a>
                            )}
                        </ItemsNavigationList>
                    </ItemsNavigation>
                </NavigationContainer>
            </Header>
        </HeaderWrapper>
    )
};

export default Navbar;