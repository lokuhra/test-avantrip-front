import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 75%;
  max-width: 1300px;
  height: 72%;
  color: black;
  margin-top: 0.5rem;
`;

export default ({ children }) => <Container>{children}</Container>;