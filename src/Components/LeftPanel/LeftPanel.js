import React from 'react';

import styled from 'styled-components';

const Nav = styled.nav`
    background-color: #ffffff;
    box-shadow: 2px 0px 5px rgba(0,0,0,0.5);
    height: 100%;
    left: 0;
    min-width: 200px;
    position: fixed;
    top: 0;
    width: 40%;
`;

const LeftPanel = props => (
        <Nav>
            <ul>
                {props.sections.map( (item, index) =>
                    <li>
                        <a key={index} href="/">
                            {item}
                        </a>
                    </li>
                )}
            </ul>
        </Nav>
);

export default LeftPanel;