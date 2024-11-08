// const { gql } = require('apollo-server-express');

// const typeDefs = gql`
//   type PetInfo {
//     _id: ID!
//     name: String!
//     age: Int
//     weight: Float
//     breed: String
//   }

//   type Query {
//     pets: [PetInfo]
//     pet(_id: ID!): PetInfo
//   }

//   type Mutation {
//     addPet(name: String!, age: Int, weight: Float, breed: String): PetInfo
//     updatePet(_id: ID!, name: String, age: Int, weight: Float, breed: String): PetInfo
//     deletePet(_id: ID!): PetInfo
//   }
// `;

// module.exports = typeDefs;


// const { gql } = require('apollo-server-express');

// const typeDefs = gql`
//   type PetInfo {
//     _id: ID
//     name: String

//     age: Int
//     weight: Float
//     breed: String
//     medications: [Medication]
//   }

//   type Medication {
//     _id: ID
//     name: String
//     frequency: String
//   }

//   type Query {
//     petInfo(_id: ID!): PetInfo
//     petInfos: [PetInfo]
//   }

//   type Mutation {
//     addPetInfo(
//       name: String!
//       age: Int
//       weight: Float
//       breed: String
//     ): PetInfo

//     updatePetInfo(
//       _id: ID!
//       name: String
//       age: Int
//       weight: Float
//       breed: String
//     ): PetInfo

//     deletePetInfo(_id: ID!): PetInfo

//     addMedication(
//       petId: ID!
//       name: String!
//       frequency: String!
//     ): PetInfo
//   }
// `;

// module.exports = typeDefs;

const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type PetInfo {
    _id: ID
    name: String
    age: Int
    weight: Float
    breed: String
    medications: [Medication]
  }

  type Medication {
    _id: ID
    name: String
    frequency: String
  }

  type Query {
    petInfo(_id: ID!): PetInfo
    petInfos: [PetInfo]
  }

  type Mutation {
    addPetInfo(
      name: String!
      age: Int
      weight: Float
      breed: String
    ): PetInfo

    updatePetInfo(
      _id: ID!
      name: String
      age: Int
      weight: Float
      breed: String
    ): PetInfo

    deletePetInfo(_id: ID!): PetInfo

    addMedication(
      petId: ID!
      name: String!
      frequency: String!
    ): Medication
  }
`;

module.exports = typeDefs;
