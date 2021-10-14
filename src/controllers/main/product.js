const db = require('../../models/index.model');

const productModel = db.product;

class product {
   // Create New Product
   static createProduct = async (req, res) => {};

   // Get all products that are supposed to show up at the current time
   static getAllProducts = async (req, res) => {
      try {
         const productData = await productModel.findAll({});
         if (productData) {
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
         });
         if (productData) {
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

   // Update Single Product By Id
   static updateSingleProduct = async (req, res) => {
      try {
         const productCheck = await productModel.findOne({
            where: { id: req.params.productId },
         });
         if (productCheck) {
            const productData = await productModel.update(
               {
                  name: req.body.name,
                  price: req.body.price,
               },
               {
                  where: { id: productCheck.id },
               }
            );
            if (productData) {
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
            });
            if (productData) {
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
                  message: 'Products Are Not Found !',
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
