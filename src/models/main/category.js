module.exports = (sequelize, Sequelize) => {
   const category = sequelize.define('category', {
      title: {
         type: Sequelize.STRING,
         allowNull: false,
      },
   });

   return category;
};
