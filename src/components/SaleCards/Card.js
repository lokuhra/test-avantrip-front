import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

const SaleCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 25vh;
  height: 50px;
  background-color: #fff;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 2px;
  z-index: 1;
  overflow: visible;
  transition: all 0.33s ease-in;
  &:hover {
    cursor: pointer;
    transform: translate(0, -2px);
    box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2),
      0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  }
`;

const Box = styled.div`
  padding: 0.25em 0.375em;
`;

const Title = styled.p`
  margin-top: 0.125em;
  color: black;
  width: 100%;
  font-size: 0.56rem;
  margin-bottom: 0;
`;

const Price = styled.p`
  margin-top: 0.125em;
  margin-bottom: 0;
  color: #4c92e1;
  width: 100%;
  font-size: 0.65rem;
  font-weight: 700;
`;

const Card = ({
  title, price, id, staysFlightsStore,
}) => (
  <SaleCard id={id} onClick={() => staysFlightsStore.setStaySelect(id) && console.log(id)}>
    <Box>
      <Title>{title}</Title>
      <Price>{price}</Price>
    </Box>
  </SaleCard>
);

export default inject('staysFlightsStore')(observer(Card));
