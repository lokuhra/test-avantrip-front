import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 20%;
  background: #8ca1a2;
  background: -webkit-linear-gradient(to right, #8ca1a2, #1b6b50);
  background: linear-gradient(to right, #8ca1a2, #1b6b50);
  padding: 1rem;

`;

export default ({ children }) => <Container>{children}</Container>;
