// import { gql } from '@apollo/client';

// export const QUERY_PETS = gql`
//   query pets {
//     pets {
//       _id
//       name
//       age
//       weight
//       breed
//     }
//   }
// `;

// export const QUERY_PET = gql`
//   query pet($_id: ID!) {
//     pet(_id: $_id) {
//       _id
//       name
//       age
//       weight
//       breed
//     }
//   }
// `;


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
