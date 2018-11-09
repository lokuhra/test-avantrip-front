import React, { Fragment } from 'react';
import Helmet from './Helmet';
import Container from './Container';
import Nav from '../Nav';
import Banner from '../Banner';
import Flights from '../Flights';
import MobxProvider from '../MobxProvider';
import ApolloProvider from '../ApolloProvider';

export default () => (
  <Fragment>
    <Helmet />
    <MobxProvider>
      <ApolloProvider>
        <Container>
          <Nav />
          <Banner />
          <Flights />
        </Container>
      </ApolloProvider>
    </MobxProvider>
  </Fragment>
);
