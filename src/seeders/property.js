const db = require('../models/index.model');

module.exports = db.property
   .bulkCreate([
      {
         key: 'First Product Feature Property Key',
         value: 'First Product Feature Property Value',
         featureId: 1,
         lang: 'en',
      },
      {
         key: 'مفتاح خاصية المنتج الثاني',
         value: 'قيمة خاصية المنتج الثاني',
         featureId: 2,
         lang: 'ar',
      },
   ])
   .then((property) => {
      property
         ? console.log('property seeded successfully')
         : console.log('faild seeding property');
   })
   .catch((err) => {
      console.log(err);
   });
