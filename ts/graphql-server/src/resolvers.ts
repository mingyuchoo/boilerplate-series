import { IResolvers } from 'apollo-server';
const resolvers: IResolvers = {
  Query: {
    helloWorld(_: void, args: void): string {
      return `Hello GraphQL~!`;
    },
  },
};
export default resolvers;
