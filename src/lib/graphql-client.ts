import { GraphQLClient } from "graphql-request";

const endpoint = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

export const graphQLClient = new GraphQLClient(endpoint, {
  // headers: {
  //   Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`, // if needed
  // },
});
