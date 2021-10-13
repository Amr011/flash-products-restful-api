const db = require('../../models/index.model');

const productModel = db.product;

class product {
    // Get all products that are supposed to show up at the current time
    static getAllProducts = async (req, res) => {
        try {
            const attributes = [];
            const order = [[]];
            const include = [];
            const where = {};
            const productData = productModel.findAll({
                where,
                order,
                attributes,
                include,
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
    // Get Single Product
    static getSingleProduct = (req, res) => {};
}

module.exports = product;
