import { gql } from "apollo-boost";
import { REPOSITORY_DETAIL } from "./fragments";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ...RepositoryDetail
        }
      }
    }
  }
  ${REPOSITORY_DETAIL}
`;

export const AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      id
    }
  }
`;

export const GET_REPOSITORY_DETAIL = gql`
  query RepositoryDetail($id: ID!) {
    repository(id: $id) {
      url
      ...RepositoryDetail
    }
  }
  ${REPOSITORY_DETAIL}
`;
