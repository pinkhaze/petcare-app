// const { PetInfo } = require('../models');

// const resolvers = {
//   Query: {
//     pets: async () => {
//       return PetInfo.find({});
//     },
//     pet: async (parent, { _id }) => {
//       return PetInfo.findById(_id);
//     },
//   },
//   Mutation: {
//     addPet: async (parent, args) => {
//       const pet = await PetInfo.create(args);
//       return pet;
//     },
//     updatePet: async (parent, { _id, name, age, weight, breed }) => {
//       return PetInfo.findByIdAndUpdate(
//         _id,
//         { name, age, weight, breed },
//         { new: true }
//       );
//     },
//     deletePet: async (parent, { _id }) => {
//       return PetInfo.findByIdAndDelete(_id);
//     },
//   },
// };

// module.exports = resolvers;


// const { PetInfo, Medication } = require('../models');

// const resolvers = {
//   Query: {
//     // Fetch a single pet by ID
//     petInfo: async (parent, { _id }) => {
//       return PetInfo.findById(_id).populate('medications');
//     },

//     // Fetch all pets
//     petInfos: async () => {
//       return PetInfo.find().populate('medications');
//     },
//   },

//   Mutation: {
//     // Add a new pet
//     addPetInfo: async (parent, { name, age, weight, breed }) => {
//       const pet = await PetInfo.create({ name, age, weight, breed });
//       return pet;
//     },

//     // Update an existing pet by ID
//     updatePetInfo: async (parent, { _id, name, age, weight, breed }) => {
//       return PetInfo.findByIdAndUpdate(
//         _id,
//         { name, age, weight, breed },
//         { new: true }
//       );
//     },

//     // Delete a pet by ID
//     deletePetInfo: async (parent, { _id }) => {
//       return PetInfo.findByIdAndDelete(_id);
//     },

//     // Add a medication to a specific pet
//     addMedication: async (parent, { petId, name, frequency }) => {
//       const medication = await Medication.create({ name, frequency });

//       // Link the new medication to the specified pet
//       await PetInfo.findByIdAndUpdate(
//         petId,
//         { $push: { medications: medication._id } },
//         { new: true }
//       );

//       return medication;
//     },
//   },
// };

// module.exports = resolvers;

const { PetInfo, Medication } = require('../models');

const resolvers = {
  Query: {
    petInfo: async (_, { _id }) => {
      return PetInfo.findById(_id).populate('medications');
    },
    petInfos: async () => {
      return PetInfo.find().populate('medications');
    },
  },
  Mutation: {
    addPetInfo: async (_, { name, age, weight, breed }) => {
      return PetInfo.create({ name, age, weight, breed });
    },

    updatePetInfo: async (_, { _id, name, age, weight, breed }) => {
      return PetInfo.findByIdAndUpdate(
        _id,
        { name, age, weight, breed },
        { new: true }
      );
    },

    deletePetInfo: async (_, { _id }) => {
      return PetInfo.findByIdAndDelete(_id);
    },

    addMedication: async (_, { petId, name, frequency }) => {
      const medication = await Medication.create({ name, frequency });

      // Optionally update PetInfo to include the new medication reference
      await PetInfo.findByIdAndUpdate(petId, { $push: { medications: medication._id } });

      return medication;
    },
  },
};

module.exports = resolvers;
