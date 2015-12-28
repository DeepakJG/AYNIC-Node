//Dependencies

var restFul = require('node-restful');
var mongoose = restFul.mongoose;

// Schema
var productSchema = new mongoose.Schema({
  name: String,
  sku: String,
  price: Number
});


//Return Model
module.exports = restFul.model('Products', productSchema);
