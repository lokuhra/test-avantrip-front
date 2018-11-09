import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { inject, observer } from 'mobx-react';
import Loading from '../../../Loading/index';

const query = gql`
  query  {
      flightses{
          id
          parentId {
              id
          }
          scales
          price
          description
          link
          img
      }
  }
`;

const QueryC = ({ staysFlightsStore }) => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return `Error! ${error.message}`;
      staysFlightsStore.setFlights(data.flightses);
      return null;
    }}
  </Query>
);

export default inject('staysFlightsStore')(observer(QueryC));
