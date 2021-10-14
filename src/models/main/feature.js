module.exports = (sequelize, Sequelize) => {
   const feature = sequelize.define('feature', {
      title: {
         type: Sequelize.STRING,
         allowNull: false,
      },
      lang: {
         type: Sequelize.STRING,
         default: 'en',
         allowNull: false,
      },
   });

   return feature;
};
