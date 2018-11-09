import React, { Fragment } from 'react';
import Loadable from 'react-loadable';
import Helmet from './Helmet';
import Container from './Container';
import Loading from '../Loading';
import MobxProvider from '../MobxProvider';
import ApolloProvider from '../ApolloProvider';

const Nav = Loadable({
  loader: () => import('../Nav'),
  loading: Loading,
});

const Banner = Loadable({
  loader: () => import('../Banner'),
  loading: Loading,
});

const Flights = Loadable({
  loader: () => import('../Flights'),
  loading: Loading,
});

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
