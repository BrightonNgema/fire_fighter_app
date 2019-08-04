import { gql } from 'react-apollo';

const registerUser = gql`
  mutation registerUser($input: UserInput!) {
    registerUser(input: $input) {
      token
    }
  }
`;

export { registerUser };
