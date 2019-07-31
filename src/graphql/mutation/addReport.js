import { gql } from "react-apollo";

const addReport = gql`
  mutation addReport($username: String!) {
    addReport(username: $username) {
      _id
      username
    }
  }
`;

export { addReport };
