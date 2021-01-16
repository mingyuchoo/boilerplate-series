import { ApolloServer } from 'apollo-server';

import resolvers from './resolvers';
import typeDefs from './typeDefs';

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

void server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
