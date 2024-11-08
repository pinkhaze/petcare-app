const mongoose = require('mongoose');
const { Schema } = mongoose;

const petInfoSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    min: 0,
  },
  weight: {
    type: Number,
    min: 0,
  },
  breed: {
    type: String,
    trim: true,
  },
  medications: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Medication',
    },
  ],
});

const PetInfo = mongoose.model('PetInfo', petInfoSchema);

module.exports = PetInfo;
