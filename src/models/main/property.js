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
   });

   return property;
};
