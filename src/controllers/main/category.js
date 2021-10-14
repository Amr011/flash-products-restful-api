const db = require('../../models/index.model');

const categoryModel = db.category;
const productMdodel = db.product;

class category {
   // Get ALl Categories
   static getAllCategories = async (req, res) => {
      try {
         const categoryData = await categoryModel.findAll({});
         if (categoryData) {
            return res.status(200).json({
               success: true,
               status: 200,
               message: 'Category Found Successfully !',
               data: categoryData,
            });
         } else {
            return res.status(400).json({
               success: false,
               status: 400,
               message: 'Category Are Not Found',
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

   // Get All Products By Category Id
   static getAllProductByCategoryId = async (req, res) => {
      try {
         const categoryData = await categoryModel.findOne({
            where: { id: req.params.categoryId },
            include: {
               model: productMdodel,
               as: 'product',
            },
         });
         if (categoryData) {
            return res.status(200).json({
               success: true,
               status: 200,
               message: 'Category Found Successfully !',
               data: categoryData,
            });
         } else {
            return res.status(400).json({
               success: false,
               status: 400,
               message: 'Category Are Not Found',
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

   // Delete Single Category By Id
   static deleteSingleCategory = async (req, res) => {
      try {
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
module.exports = category;
