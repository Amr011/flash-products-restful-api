module.exports = (sequelize, Sequelize) => {
   const product = sequelize.define('product', {
      name: {
         type: Sequelize.STRING,
         allowNull: false,
      },
      startDate: {
         type: Sequelize.DATE,
         allowNull: true,
      },
      duration: {
         type: Sequelize.INTEGER,
         allowNull: true,
      },
      price: {
         type: Sequelize.INTEGER,
         allowNull: false,
      },
   });

   return product;
};
