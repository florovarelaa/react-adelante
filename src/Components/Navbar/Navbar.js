import React from 'react';

import HamburguerMenu from '../HamburguerMenu/HamburguerMenu';
import styled from 'styled-components';
import ToolbarInfo from '../ToolbarInfo/ToolbarInfo';

const Header = styled.header`
    background: #0000007A;
    display: flex;
    flex-direction: column;
    height: 108px;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 5;
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
        font-family: 'Sans-serif', cursive;
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
    flex-direction: row;
    font-size: 1rem;
    height: 40px;
    justify-content: space-around;
    width: 100%;
`;

function Navbar (props) {
    return (
        <div>
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
    </div>
    )
};

export default Navbar;