import { gql } from 'react-apollo';

const addReport = gql`
  mutation addReport($input: ReportInput!) {
    addReport(input: $input) {
      _id
      cellnumber
      deviceId
      ipAddress
      status
      level
      address {
        fulladdress
        geo {
          lat
          lng
        }
      }
      createdDate
    }
  }
`;

export { addReport };
