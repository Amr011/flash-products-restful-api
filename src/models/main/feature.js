module.exports = (sequelize, Sequelize) => {
   const feature = sequelize.define('feature', {
      title: {
         type: Sequelize.STRING,
         allowNull: false,
      },
   });

   return feature;
};
