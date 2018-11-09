import React from "react";
import styled from "styled-components";
import { FaPlane } from "react-icons/fa";

const Card = styled.div`
  margin-top: 0.75rem;
  height: 75%;
  width: 40vh;
  border-radius: 4px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  transition: all 0.33s ease;
  &:hover {
    cursor: pointer;
    transform: translate(0, -2px);
    box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2),
      0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  }
`;

const Img = styled.img`
  height: 75%;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  height: 33%;
  width: 100%;
`;

const Column = styled.div`
  margin: 1em 0.6em 0 0.6em;
  padding: 0.25em 0.375em;
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 100%;
`;

const ColumnLeft = styled(Column)`
  width: 65%;
`;

const StopText = styled.p`
  font-size: 0.56rem;
  margin: 0;
  width: 100%;
`;

const SubTitle = styled(StopText)`
  text-align: end;
`;

const ViewText = styled(StopText)`
  margin-top: 1em;
  text-align: end;
  color: #4c92e1;
`;

const RedText = styled.p`
  color: #e1010b;
  margin: 0.125em 0 0 0;
  width: 100%;
  font-weight: 900;
`;

const PriceText = styled(RedText)`
  text-align: end;
`;

const Icon = styled(FaPlane)`
  margin-right: 0.25em;
`;

export default ({ img, stop, days, price }) => (
  <Card>
    <Img src={img} />
    <Content>
      <ColumnLeft>
        <StopText>
          <Icon />
          {stop}
        </StopText>
        <RedText>{days}</RedText>
      </ColumnLeft>
      <Column>
        <SubTitle>Precio desde</SubTitle>
        <PriceText>{price}</PriceText>
        <ViewText>VER VUELO</ViewText>
      </Column>
    </Content>
  </Card>
);
