// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const seedProducts = require('../seeds/product-seeds');

// Products belongsTo Category

Product.belongsTo(Category,{

  foreignKey: 'id',
  onDelete:'CASCADE',


});
  
  
  
  

// Categories have many Products


Category.hasMany(Product, {
  foreignKey: 'id',
  onDelete: 'CASCADE',

});




// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
