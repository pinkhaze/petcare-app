const mongoose = require('mongoose');
const { Schema } = mongoose;

const medicationSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  frequency: {
    type: String,
    required: true,
  },
});

const Medication = mongoose.model('Medication', medicationSchema);

module.exports = Medication;
