const db = require('../models/index.model');


module.exports = db.user
   .create({
      email: 'example@example.com',
      password: '12345',
   })
   .then((user) => {
      user
         ? console.log('user seeded successfully')
         : console.log('faild seeding user');
   })
   .catch((err) => {
      console.log(err);
   });
