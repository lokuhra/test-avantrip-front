import React from 'react';
import styled from 'styled-components';

const SalesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  height: 40%;
  margin-top: 0.45rem;
`;

export default ({ children }) => <SalesContainer>{children}</SalesContainer>;
