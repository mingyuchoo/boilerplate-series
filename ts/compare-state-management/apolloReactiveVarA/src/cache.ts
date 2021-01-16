import { InMemoryCache } from "@apollo/client";
import { TodosState } from "./states/TodosState";

const cache = new InMemoryCache({
  addTypename: true,
  resultCaching: true,
  typePolicies: {
    Query: {
      fields: { ...TodosState },
    },
  },
});

export default cache;
