import React from 'react';

import styled from 'styled-components';

const HamburguerButton = styled.button`
    background: transparent;
    border: none;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 24px;
    justify-content: space-around;
    margin: 1rem;
    min-width: 32px;
    padding: 0;
    width: 28px;
    
    :focus {
        outline: none;
    }

    @media screen and (min-width: 880px) {
        display: none;
    }
`;

const HamburguerButtonLine = styled.div`
    background: white;
    height: 2px;
    width: 30px;
`;

const HamburguerMenu = props => {
    return (
        <HamburguerButton onClick={props.click}>
            <HamburguerButtonLine />
            <HamburguerButtonLine />
            <HamburguerButtonLine />
        </HamburguerButton>
    );
}

export default HamburguerMenu;