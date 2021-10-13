const db = require('../../models/index.model');

const categoryModel = db.category;

class category {
   // Get ALl Categories
   static getAllCategories = async (req, res) => {
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

   // Get All Products By Category Id
   static getAllProductByCategoryId = async (req, res) => {
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
