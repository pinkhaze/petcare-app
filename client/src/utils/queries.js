import { gql } from '@apollo/client';

export const QUERY_PET_INFO = gql`
  query getPetInfo($id: ID!) {
    petInfo(_id: $id) {
      _id
      name
      age
      weight
      breed
      medications {
        _id
        name
        frequency
      }
    }
  }
`;

export const QUERY_ALL_PET_INFOS = gql`
  {
    petInfos {
      _id
      name
      age
      weight
      breed
      medications {
        name
        frequency
      }
    }
  }
`;

export const QUERY_MEDICATIONS = gql`
  {
    medications {
      _id
      name
      frequency
    }
  }
`;
