import { gql } from 'apollo-boost';

export const allPeopleQuery = gql`
  {
    query {
      allPeople {
        nodes {
          name
        }
      }
    }
  }
`;
