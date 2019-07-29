import React from 'react';

import './Navbar.css';
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

const ItemsContainer = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    width: 100%;
`;

const HeaderWrapper = styled.div`
    height: 30%;
    position: relative;
`;

function Navbar (props) {
    return (
        <HeaderWrapper>
            <Header>
                <ItemsContainer>
                    <div className="toolbar-navigation-items">
                        <ul>
                            {props.children}
                        </ul>
                    </div>
                </ItemsContainer>
            </Header>
        </HeaderWrapper>
    )
};

export default Navbar;