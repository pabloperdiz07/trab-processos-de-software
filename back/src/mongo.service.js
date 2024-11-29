const mongoose = require('mongoose');

const mongoHost = process.env.MONGO_HOST;
const mongoPORT = process.env.MONGO_PORT;

const mongoUser = process.env.MONGO_USERS_USER;
const mongoPassword = process.env.MONGO_USERS_PASSWORD;
const mongoDb = process.env.MONGO_USERS_DB;

const mongoUsersUrl = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPORT}/${mongoDb}?authSource=${mongoDb}`;

mongoose.connect(mongoUsersUrl)
  .then(() => console.log(`Connected to MongoDB ${mongoDb}`))
  .catch(err => console.error(`Could not connect to MongoDB ${mongoDb}:`, err));