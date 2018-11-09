import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
  margin-top: 1.5em;
  margin-bottom: 1.5rem;
`;

const Title = styled.p`
  font-size: 1.8rem;
  color: #4a494b;
  font-weight: 300;
`;

const TitleBold = styled.p`
  margin-left: 5px;
  font-size: 1.8rem;
  color: #4a494b;
  font-weight: 900;
`;
export default () => (
  <Container>
    <Title>Vuelos destacados en</Title>
    <TitleBold>todas las estadías</TitleBold>
  </Container>
);
