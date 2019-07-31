import { gql } from 'react-apollo';

const getReports = gql`
  query {
    reports {
      _id
      username
    }
  }
`;

export { getReports };
