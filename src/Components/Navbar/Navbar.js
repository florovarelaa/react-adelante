import React from 'react';

import HamburguerMenu from '../HamburguerMenu/HamburguerMenu';
import styled from 'styled-components';

const Header = styled.header`
    background: #0000007A;
    border-radius: 0 0 20px 20px;
    display: flex;
    flex-direction: column;
    height: 70px;
    left: 0;
    margin-left: 10%;
    position: sticky;
    top: 0;
    width: 80%;
    z-index: 5;

    @media screen and (max-width: 880px) {
        left: 80%;
        width: 50px;
    }
`;

const ItemsNavigation = styled.div`
    position: relative;
    width: 100%;

    @media screen and (max-width: 880px) {
        display: none;
    }
`;

const ItemsNavigationList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;

    a {
        color: #f0f0f0;
        font-family: 'Sans-serif', cursive;
        text-decoration: none;
        text-transform: capitalize;
    }

    a:hover {
        color: #878787;
    }
`;

const NavigationContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    font-size: 1.5rem;
    height: 100%;
    justify-content: space-around;
    width: 100%;
`;

function Navbar (props) {
    return (
        <Header>
            <NavigationContainer>
                <HamburguerMenu click={props.leftPanelClickHandler}/>
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