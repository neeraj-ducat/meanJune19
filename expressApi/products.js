// express is imported
const express = require('express');
// body-parser is imported
const bodyparser = require('body-parser');
// express object is created
const app = express();
// mongoose is imported
const mongoose = require('mongoose');
// Create connection to the mongo database.
mongoose.connect('mongodb://localhost:27017/ducat');
// Create a mongoose model object to represent the 
// Documents to be saved, updated, deleted or fetched.
const Product = mongoose.model('products',{
    name: String,
    brand: String,
    price: Number
  });
// ObjectId class is imported to execute query on the basis
// of id
const ObjectId = mongoose.Types.ObjectId;
// cors is imported.
const cors = require('cors');
// cors middleware is registered.
app.use(cors());

// middleware is registered with the express object.
// app.use(bodySetter);
app.use(bodyparser.json());

// API endpoints are defined 

 // To save a product
 app.post('/products',function(req,res){
     let product = new Product(req.body);
     product.save().then(()=>{
        res.json({result: 'successfully saved.'});
     });
    
    
 });

// To update a product
app.put('/products',function(req,res){
    let product = req.body;
    console.log("To be updated: ",product);
    Product.updateOne({_id: ObjectId(product._id)},{$set: {name: product.name, brand: product.brand, price: product.price}})
        .then((result)=>{
            console.log(result);
            res.json({result: 'successfully updated.'});
        });
   
     
});

// To remove a product
app.delete('/products/:id',function(req,res){
    let id = req.params['id'];
    Product.remove({_id: ObjectId(id)})
        .then(()=>{
            res.json({result: 'successfully removed.'});
        });
    
   
});

 // To save an Productloyee
 app.get('/products',function(req,res){
    //request processing code.
    Product.find().then(result => {
        res.json(result);
    });
});

 // server is started.
 app.listen(3000, function(){
     console.log('server is started on port 3000');
 });