const db = require('../models/index.model');
// time format
const moment = require('moment');
// time diffrence
const timeDiff = require('timediff');
const productStartDate = new Date(new Date() - 24 * 60 * 60 * 1000);
const productEndDate = new Date(new Date() + 24 * 60 * 60 * 1000);
const duration = timeDiff(productStartDate, productEndDate); // calculate duration
const durationSTR = `duration => years:${duration.years}, months:${duration.months}, days:${duration.days}, hours:${duration.hours}, minutes:${duration.minutes}, seconds:${duration.seconds}`;
moment(productStartDate).format('YYYY-MM-DD HH:mm:ss'); // format product start date
moment(productEndDate).format('YYYY-MM-DD HH:mm:ss'); // format product end date

module.exports = db.product
   .bulkCreate([
      {
         name: 'my First Product',
         price: 19,
         startDate: productStartDate,
         endDate: productEndDate,
         duration: durationSTR,
         lang: 'en',
         categoryId: 1,
      },
      {
         name: 'المنتج الثاني',
         price: 32,
         startDate: productStartDate,
         endDate: productEndDate,
         duration: durationSTR,
         lang: 'ar',
         categoryId: 1,
      },
   ])
   .then((product) => {
      product
         ? console.log('product seeded successfully')
         : console.log('faild seeding product');
   })
   .catch((err) => {
      console.log(err);
   });
