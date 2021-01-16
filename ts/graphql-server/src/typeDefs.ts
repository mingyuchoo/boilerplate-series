import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    helloWorld: String!
  }
`;

export default typeDefs;
