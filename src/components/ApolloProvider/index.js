import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { wss, uri } from '../../utils/prisma.settings';

const wsLink = process.browser
  ? new WebSocketLink({
    uri: wss,
    options: {
      reconnect: true,
    },
  })
  : null;

const httpLink = new HttpLink({
  uri,
});

const link = process.browser
  ? split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    wsLink,
    httpLink,
  )
  : httpLink;

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
