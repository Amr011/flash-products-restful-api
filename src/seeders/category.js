const db = require('../models/index.model');

module.exports = db.category
   .bulkCreate([{ title: 'my First Category' }, { title: 'my Sec Category' }])
   .then((category) => {
      category
         ? console.log('category seeded successfully')
         : console.log('faild seeding category');
   })
   .catch((err) => {
      console.log(err);
   });
