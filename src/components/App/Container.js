import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #ffffff;
  height: 100vh;
  max-height: 100vh;
  min-height: 100vh;
  font-family: "Roboto", sans-serif;
  color: #ffffff;
`;

export default ({ children }) => <Container>{children}</Container>;
