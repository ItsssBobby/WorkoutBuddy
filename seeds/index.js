const seedLogins = require('./seeds-login');
const seedUsers = require('./seeds-user');
const seedWorkoutPref = require('./seeds-workoutPref');
const seedPost = require('./seeds-post');

const sequelize = require('../config/connection');


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedLogins();
    console.log('\n----- LOGINS SEEDED -----\n');
  
    await seedWorkoutPref();
    console.log('\n----- WORKOUT PREFERENCES SEEDED -----\n');

    await seedPost();
    console.log('\n----- POSTS SEEDED -----\n')
    
    process.exit(0);
  };
  
  seedAll()