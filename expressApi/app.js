// express is imported
const express = require('express');
// body-parser is imported
const bodyparser = require('body-parser');
// express object is created
 const app = express();

 // Array to store emp objects
 const emps = [
     {name: 'Amit',job: 'Trainee', salary: 25000},
     {name: 'Raman',job: 'Trainer', salary: 65000},
     {name: 'Kapil',job: 'Accountnat', salary: 40000},
 ];
/*
// middle ware is defined. 
let bodySetter = function(req, res,next) {
    req.body={dummy: 'It is set by my middleware'};
    next();
}
*/

// middleware is registered with the express object.
// app.use(bodySetter);
app.use(bodyparser.json());

// API endpoints are defined 

 // To save an employee
 app.post('/employees',function(req,res){
     let emp = req.body;
     emps.push(emp);
     res.json({result: 'successfully saved.'});
 });

// To update an employee
app.put('/employees',function(req,res){
    let emp = req.body;
    let name = emp.name;
    console.log('Details of '+name+' will be updated.');
    for(let e of emps)
     {
         if (e.name === name)
         {
             e.job = emp.job;
             e.salary = emp.salary;
             break;
         }
     }
     res.json({result: 'successfully updated.'});
});

// To remove an employee
app.delete('/employees/:name',function(req,res){
    let name = req.params['name'];
    console.log('Emp '+name+' will be deleted.');
    for(let emp of emps)
     {
         if (emp.name === name)
         {
             emps.splice(emps.indexOf(emp),1);
             break;
         }
     }
    res.json({result: 'successfully deleted.'});
});

 // To save an employee
 app.get('/employees',function(req,res){
    //request processing code.
    res.json({result: emps});
});

 // server is started.
 app.listen(3000, function(){
     console.log('server is started on port 3000');
 });