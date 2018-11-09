import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1300px;
  padding: 0.3125rem 0.3125rem;
  margin: 0 auto;
  background-color: #ffffff;
  max-height: 8%;
`;

export default ({ children }) => <Container>{children}</Container>;
