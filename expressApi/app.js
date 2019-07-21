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
const Emp = mongoose.model('emps',{
    name: String,
    job: String,
    salary: Number
  });
// ObjectId class is imported to execute query on the basis
// of id
const ObjectId = mongoose.Types.ObjectId;

// middleware is registered with the express object.
// app.use(bodySetter);
app.use(bodyparser.json());

// API endpoints are defined 

 // To save an employee
 app.post('/employees',function(req,res){
     let emp = new Emp(req.body);
     emp.save().then(()=>{
        res.json({result: 'successfully saved.'});
     });
    
    
 });

// To update an employee
app.put('/employees',function(req,res){
    let emp = req.body;
    console.log("To be updated: ",emp);
    Emp.updateOne({_id: ObjectId(emp._id)},{$set: {name: emp.name, job: emp.job, salary: emp.salary}})
        .then((result)=>{
            console.log(result);
            res.json({result: 'successfully updated.'});
        });
   
     
});

// To remove an employee
app.delete('/employees/:id',function(req,res){
    let id = req.params['id'];
    Emp.remove({_id: ObjectId(id)})
        .then(()=>{
            res.json({result: 'successfully removed.'});
        });
    
   
});

 // To save an employee
 app.get('/employees',function(req,res){
    //request processing code.
    Emp.find().then(result => {
        res.json(result);
    });
});

 // server is started.
 app.listen(3000, function(){
     console.log('server is started on port 3000');
 });