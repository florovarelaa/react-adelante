import React from 'react';

import styled from 'styled-components';

const Nav = styled.nav`
    background-color: #ffffff;
    box-shadow: 1px 0px 7px rgba(0,0,0,0.5);
    height: 100%;
    left: 0;
    min-width: 200px;
    position: fixed;
    top: 0;
    transform: ${props => (props.show ? 'translateX(0%)' : 'translateX(-100%)' )};
    transition: transform 0.3s ease-out;
    width: 40%;
    z-index: 200;

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

    li {
        margin: 1.5rem 0;
    }

    ul {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
        list-style: none;
        padding: 0 0 0 3rem;
        margin: 0;
    }
`;

const LeftPanel = props => {
    return(
        <Nav show={props.show}>
            <ul>
                {props.sections.map( (item, index) =>
                    <li key={index}>
                        <a href="/">
                            {item}
                        </a>
                    </li>
                )}
            </ul>
        </Nav>
    )
};

export default LeftPanel;