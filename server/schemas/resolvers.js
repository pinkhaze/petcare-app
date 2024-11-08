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
