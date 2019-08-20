import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    align-items: center;
    display: flex;
    font-size: 1rem;
    height: 100%;
    justify-content: space-around;
    width: 100%;
`;

const ToolbarInfo = () => {
    return (
        <div>
            <Container />
        </div>
    )
}

export default ToolbarInfo;