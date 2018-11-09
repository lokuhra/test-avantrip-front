import React, { Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import GetAllStays from '../ApolloQueries/Queries/GetAllStays';
import Card from './Card';

function format(amount) {
  const formatter = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(amount);
}

const Query = ({ staysFlightsStore }) => (
  <Fragment>
    <GetAllStays />
    {staysFlightsStore.stays
      && staysFlightsStore.stays.map(item => (
        <Card
          key={item.id}
          id={item.id}
          price={`desde ${format(item.bestPrice)}`}
          title={item.name}
        />
      ))}
  </Fragment>
);

export default inject('staysFlightsStore')(observer(Query));
