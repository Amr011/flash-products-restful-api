const db = require('../../models/index.model');

const categoryModel = db.category;
const productMdodel = db.product;
const featureModel = db.feature;
const propertyModel = db.property;

class category {
   // Get ALl Categories
   static getAllCategories = async (req, res) => {
      try {
         const categoryData = await categoryModel.findAll({
            include: {
               model: productMdodel,
               as: 'product',
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

   // Get All Products By Category Id
   static getAllProductByCategoryId = async (req, res) => {
      try {
         const categoryData = await categoryModel.findOne({
            where: { id: req.params.categoryId },
            include: {
               model: productMdodel,
               as: 'product',
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
         const categoryCheck = await categoryModel.findOne({
            where: { id: req.params.categoryId },
         });
         if (categoryCheck) {
            const categoryData = await categoryModel.destroy({
               where: { id: categoryCheck.id },
            });
            if (categoryData) {
               return res.status(200).json({
                  success: true,
                  status: 200,
                  message: 'category Deleted Successfully !',
               });
            } else {
               return res.status(400).json({
                  success: false,
                  status: 400,
                  message: 'Faild Deleting Category !',
               });
            }
         } else {
            return res.status(400).json({
               success: false,
               status: 400,
               message: 'The Category Is Not Exist !',
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
module.exports = category;
