import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { inject, observer } from 'mobx-react';
import Loading from '../../../Loading/index';

const query = gql`
  query {
    stayses {
      id
      bestPrice
      name
    }
  }
`;

const Result = ({ staysFlightsStore }) => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading) return <Loading />;
      if (error) return `Error! ${error.message}`;
      staysFlightsStore.setStays(data.stayses);
      return null;
    }}
  </Query>
);

export default inject('staysFlightsStore')(observer(Result));
