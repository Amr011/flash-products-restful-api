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

      db.category
         .bulkCreate([
            { title: 'my First Category' },
            { title: 'my Sec Category' },
         ])
         .then((category) => {
            category
               ? console.log('category seeded successfully')
               : console.log('faild seeding category');

            db.product
               .bulkCreate([
                  {
                     name: 'my First Product',
                     price: 19,
                     startDate: Date.now(),
                     duration: 12,
                     categoryId: 1,
                  },
                  {
                     name: 'my Secound Product',
                     price: 32,
                     startDate: Date.now(),
                     duration: 25,
                     categoryId: 1,
                  },
               ])
               .then((product) => {
                  product
                     ? console.log('product seeded successfully')
                     : console.log('faild seeding product');

                  db.feature
                     .bulkCreate([
                        {
                           title: 'First Product Feature',
                           productId: 1,
                        },
                        {
                           title: 'Secound Product Feature',
                           productId: 2,
                        },
                     ])
                     .then((feature) => {
                        feature
                           ? console.log('feature seeded successfully')
                           : console.log('faild seeding feature');

                        db.property
                           .bulkCreate([
                              {
                                 key: 'First Product Feature Property Key',
                                 value: 'First Product Feature Property Value',
                                 featureId: 1,
                              },
                              {
                                 key: 'Secound Product Feature Property Key',
                                 value: 'Secound Product Feature Property Value',
                                 featureId: 2,
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
                     })
                     .catch((err) => {
                        console.log(err);
                     });
               })
               .catch((err) => {
                  console.log(err);
               });
         })
         .catch((err) => {
            console.log(err);
         });
   })
   .catch((err) => {
      console.log(err);
   });
