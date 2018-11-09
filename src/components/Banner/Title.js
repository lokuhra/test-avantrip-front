import React from 'react';
import styled from 'styled-components';

const Title = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
`;
const TitleBold = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  margin-left: 0.25em;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 60%;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export default () => (
  <Container>
    <Title>Los vuelos más baratos para su estadía en </Title>
    <TitleBold>Miami</TitleBold>
  </Container>
);
