module.exports = (sequelize, Sequelize) => {
   const property = sequelize.define('property', {
      key: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      value: {
         type: Sequelize.STRING,
         allowNull: true,
      },
      lang: {
         type: Sequelize.STRING,
         default: 'en',
         allowNull: false,
      },
   });

   return property;
};
