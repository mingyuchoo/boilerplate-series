import './index.scss';

import { ApolloClient, ApolloProvider, HttpLink, split } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { LocalStorageWrapper, persistCacheSync } from 'apollo3-cache-persist';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { cache } from './cache';
import * as serviceWorker from './serviceWorker';

const SERVER_URI = process.env.REACT_APP_SERVER_URI || 'localhost:4000/graphql';

// TODO: storage 타입을 제대로 선언해야 함.
// 참고: https://github.com/apollographql/apollo-cache-persist/issues/55
persistCacheSync({
  cache,
  storage: new LocalStorageWrapper(window.localStorage),
  debug: true,
});

const httpLink = new HttpLink({
  uri: SERVER_URI ? `https://${SERVER_URI}` : `http://${SERVER_URI}`,
});

// `lazy: true` - prevents our link from connecting to the web socket
//                until the client has been asked to subscribe.
const wsLink = new WebSocketLink({
  uri: `ws://${SERVER_URI}`,
  options: {
    reconnect: true,
    lazy: true,
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
