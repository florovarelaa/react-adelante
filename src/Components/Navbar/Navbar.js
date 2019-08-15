import React from 'react';

import HamburguerMenu from '../HamburguerMenu/HamburguerMenu';
import Logo from '../Logo/Logo';
import styled from 'styled-components';

const Header = styled.header`
    background: #0000007A;
    display: flex;
    height: 66px;
    justify-content: space-around;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
`;

const ItemsNavigation = styled.div`
    justify-self: flex-end;
    margin-left: auto;
    margin-right: 1rem;
    position: relative;

    @media screen and (max-width: 880px) {
        display: none;
    }
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
    }

    a:hover {
        color: #878787;
    }

    li {
        margin: 0 1rem;
    }
`;

const NavigationContainer = styled.div`
    align-items: center;
    display: flex;
    font-size: 1rem;
    height: 100%;
    width: 100%;
`;

function Navbar (props) {
    return (
            <Header>
                <NavigationContainer>
                    <HamburguerMenu click={props.leftPanelClickHandler}/>
                    <Logo logo={props.logo} />
                    <ItemsNavigation>
                        <ItemsNavigationList>
                            {props.sections.map( (item, index) =>
                                <li key={index}>
                                    <a href={`${item.toLowerCase}`}>
                                        {item}
                                    </a>
                                </li>
                            )}
                        </ItemsNavigationList>
                    </ItemsNavigation>
                </NavigationContainer>
            </Header>
    )
};

export default Navbar;