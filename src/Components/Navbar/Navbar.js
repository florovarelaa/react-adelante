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

const ItemsNavigation = styled.div`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
`;

const ItemsNavigationContainer = styled.div`
    align-items: center;
    display: flex;
    font-size: 2vw;
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
        padding: 0 1rem;
    }

    a:hover {
        color: #878787;
    }
`;

const HeaderWrapper = styled.div`
    height: 30%;
    position: relative;
`;

function Navbar (props) {
    return (
        <HeaderWrapper>
            <Header>
                <ItemsNavigationContainer>
                    <ItemsNavigation>
                        <ItemsNavigationList>
                            {props.children}
                        </ItemsNavigationList>
                    </ItemsNavigation>
                </ItemsNavigationContainer>
            </Header>
        </HeaderWrapper>
    )
};

export default Navbar;