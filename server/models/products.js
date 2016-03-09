/**
 * Schema Definitions
 *
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Prduct Schema
 */

var ProductSchema = new mongoose.Schema({
  product: String,
  desc: String,
  image: String,
  price: Number
});

/**
 * Validations
 */

ProductSchema.path('product').required(true, 'Product title cannot be blank');


// Compiles the schema into a model, opening (or creating, if
//	nonexistent) the 'Product' collection in the MongoDB database
Product = mongoose.model('Product', ProductSchema);