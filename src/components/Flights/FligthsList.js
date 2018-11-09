import React, { Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import GetAllFlightsById from '../ApolloQueries/Queries/GetAllFlightsById';
import GetAllFlights from '../ApolloQueries/Queries/GetAllFlights';
import Flights from './Flights';

const Card = ({ staysFlightsStore }) => (
  <Fragment>
    {staysFlightsStore.staySelect ? <GetAllFlightsById /> : <GetAllFlights />}
    {staysFlightsStore.flights && staysFlightsStore.flights.map(item => (
      <Flights
        key={item.id}
        days={item.description}
        img={item.img}
        price={item.price}
        stop={item.scales}
      />
    ))}
  </Fragment>
);

export default inject('staysFlightsStore')(observer(Card));
