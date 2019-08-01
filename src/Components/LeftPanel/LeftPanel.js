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
    z-index: 200;

    ul {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
        list-style: none;
        padding: 0 0 0 3rem;
        margin: 0;
    }

    li {
        margin: 1.5rem 0;
    }

    a {
        color: #000000;
        font-size: 1.1rem;
        text-decoration: none;
        text-transform: capitalize;
    }

    a:hover,
    a:active {
        color: #878787;
    }
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