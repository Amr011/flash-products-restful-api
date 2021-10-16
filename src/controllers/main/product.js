const db = require('../../models/index.model');
const sequelize = require('sequelize');

const Op = sequelize.Op;

const moment = require('moment');
const timeDiff = require('timediff');

const productModel = db.product;
const featureModel = db.feature;
const propertyModel = db.property;

class product {
   // Get all products that are supposed to show up at the current time
   static getAllProducts = async (req, res) => {
      try {
         var lang = req.query.lang; // Language sellection
         var date = new Date();
         moment(date).format('YYYY-MM-DD HH:mm:ss'); // format date

         const productData = await productModel.findAll({
            where: {
               lang: lang || 'en', // Default Selection is english
               [Op.or]: {
                  startDate: {
                     [Op.lt]: date, // StartDate < date now
                  },
                  endDate: {
                     [Op.gt]: date, // EndDate > date now
                  },
               },
            },
            include: [
               {
                  model: featureModel,
                  as: 'feature',
                  include: [
                     {
                        model: propertyModel,
                        as: 'property',
                     },
                  ],
               },
            ],
         });
         if (productData.length !== 0) {
            return res.status(200).json({
               success: true,
               status: 200,
               message: 'Products Found Successfully !',
               data: productData,
            });
         } else {
            return res.status(400).json({
               success: false,
               status: 400,
               message: 'Products Are Not Found',
            });
         }
      } catch (err) {
         console.log(err);
         return res.status(400).json({
            message: 'Unexpected Error',
            status: 400,
            error: err,
         });
      }
   };

   // Get Single Product By Id
   static getSingleProduct = async (req, res) => {
      try {
         const productData = await productModel.findOne({
            where: { id: req.params.productId },
            include: [
               {
                  model: featureModel,
                  as: 'feature',
                  include: [
                     {
                        model: propertyModel,
                        as: 'property',
                     },
                  ],
               },
            ],
         });
         if (productData.length !== 0) {
            return res.status(200).json({
               success: true,
               status: 200,
               message: 'Products Found Successfully !',
               data: productData,
            });
         } else {
            return res.status(400).json({
               success: false,
               status: 400,
               message: 'Products Are Not Found',
            });
         }
      } catch (err) {
         console.log(err);
         return res.status(400).json({
            message: 'Unexpected Error',
            status: 400,
            error: err,
         });
      }
   };

   // Create New Product
   static createProduct = async (req, res) => {
      try {
         const duration = timeDiff(req.body.startDate, req.body.endDate); // calculate duration
         const durationSTR = `duration => years:${duration.years}, months:${duration.months}, days:${duration.days}, hours:${duration.hours}, minutes:${duration.minutes}, seconds:${duration.seconds}`;

         const productData = await productModel.create({
            name: req.body.name, // product name
            price: req.body.price, // product price
            startDate: req.body.startDate, // product start showing date
            endDate: req.body.endDate, // product end showing date
            duration: durationSTR,
            lang: req.body.lang, // Product Language
         });
         if (productData.length !== 0) {
            return res.status(200).json({
               success: true,
               status: 200,
               message: 'Product Successfully Created !',
            });
         } else {
            return res.status(400).json({
               success: true,
               status: res.status(),
               message: 'Failed Creating Product !',
            });
         }
      } catch (err) {
         console.log(err);
         return res.status(400).json({
            message: 'Unexpected Error',
            status: 400,
            error: err,
         });
      }
   };

   // Update Single Product By Id
   static updateSingleProduct = async (req, res) => {
      try {
         const duration = timeDiff(req.body.startDate, req.body.endDate); // calculate duration
         const durationSTR = `duration => years:${duration.years}, months:${duration.months}, days:${duration.days}, hours:${duration.hours}, minutes:${duration.minutes}, seconds:${duration.seconds}`;

         const productCheck = await productModel.findOne({
            where: { id: req.params.productId },
         });
         if (productCheck) {
            const productData = await productModel.update(
               {
                  name: req.body.name, // product name
                  price: req.body.price, // product price
                  startDate: req.body.startDate, // product start showing date
                  endDate: req.body.endDate, // product end showing date
                  duration: durationSTR, // product end showing date
                  lang: req.body.lang, // product Language
               },
               {
                  where: { id: productCheck.id },
               }
            );
            if (productData) {
               return res.status(200).json({
                  success: true,
                  status: 200,
                  message: 'Products Updated Successfully !',
               });
            } else {
               return res.status(400).json({
                  success: false,
                  status: 400,
                  message: 'Cannot Update Product',
               });
            }
         } else {
            return res.status(400).json({
               success: false,
               status: 400,
               message: 'The Product Is Not Exist !',
            });
         }
      } catch (err) {
         console.log(err);
         return res.status(400).json({
            message: 'Unexpected Error',
            status: 400,
            error: err,
         });
      }
   };

   // Delete Single Product By Id
   static deleteSingleProduct = async (req, res) => {
      try {
         const productCheck = await productModel.findOne({
            where: { id: req.params.productId },
         });
         if (productCheck) {
            const productData = await productModel.destroy({
               where: { id: productCheck.id },
               include: [
                  {
                     model: featureModel,
                     as: 'feature',
                     include: [
                        {
                           model: propertyModel,
                           as: 'property',
                        },
                     ],
                  },
               ],
            });
            if (productData) {
               return res.status(200).json({
                  success: true,
                  status: 200,
                  message: 'Product Deleted Successfully !',
               });
            } else {
               return res.status(400).json({
                  success: false,
                  status: 400,
                  message: 'Cannot Delete Product  !',
               });
            }
         } else {
            return res.status(400).json({
               success: false,
               status: 400,
               message: 'The Product Is Not Exist !',
            });
         }
      } catch (err) {
         console.log(err);
         return res.status(400).json({
            message: 'Unexpected Error',
            status: 400,
            error: err,
         });
      }
   };
}

module.exports = product;
