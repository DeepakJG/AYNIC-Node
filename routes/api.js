// Dependencies
var express = require("express");
var router = express.Router();
//var mongoos = router.get();


// Models
var Product  = require('../models/product');

// Routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router,'/products');

router.get('/products', function(req, res){
  res.send("No Products Found");
});

//Return Router
module.exports = router;
