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
         type: Sequelize.STRING,
         allowNull: true,
      },
      endDate: {
         type: Sequelize.DATE,
         allowNull: true,
      },
      price: {
         type: Sequelize.INTEGER,
         allowNull: false,
      },
      lang: {
         type: Sequelize.STRING,
         default: 'en',
         allowNull: false,
      },
   });

   return product;
};
