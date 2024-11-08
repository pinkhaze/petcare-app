const db = require('../config/connection');
const { PetInfo } = require('../models');

const petData = require('./petData.json');

db.once('open', async () => {
  await PetInfo.deleteMany({});

  const pets = await PetInfo.insertMany(petData);

  console.log('Pet profiles seeded!');
  process.exit(0);
});
