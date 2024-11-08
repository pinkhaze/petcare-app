import { gql } from '@apollo/client';

// PetInfo Mutations
export const ADD_PET_INFO = gql`
  mutation addPetInfo($name: String!, $age: Int, $weight: Float, $breed: String) {
    addPetInfo(name: $name, age: $age, weight: $weight, breed: $breed) {
      _id
      name
      age
      weight
      breed
    }
  }
`;

export const UPDATE_PET_INFO = gql`
  mutation updatePetInfo($_id: ID!, $name: String, $age: Int, $weight: Float, $breed: String) {
    updatePetInfo(_id: $_id, name: $name, age: $age, weight: $weight, breed: $breed) {
      _id
      name
      age
      weight
      breed
    }
  }
`;

export const DELETE_PET_INFO = gql`
  mutation deletePetInfo($_id: ID!) {
    deletePetInfo(_id: $_id) {
      _id
      name
    }
  }
`;

// Medication Mutation
export const ADD_MEDICATION = gql`
  mutation addMedication($petId: ID!, $name: String!, $frequency: String!) {
    addMedication(petId: $petId, name: $name, frequency: $frequency) {
      _id
      name
      frequency
    }
  }
`;
