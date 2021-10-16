const db = require('../models/index.model');

module.exports = db.feature
   .bulkCreate([
      {
         title: 'First Product Feature',
         productId: 1,
         lang: 'en',
      },
      {
         title: 'خاصية المنتج الثاني',
         productId: 2,
         lang: 'ar',
      },
   ])
   .then((feature) => {
      feature
         ? console.log('feature seeded successfully')
         : console.log('faild seeding feature');
   })
   .catch((err) => {
      console.log(err);
   });
