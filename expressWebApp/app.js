const express = require('express');
const bodyParser = require('body-parser');
var path=require('path');
var multer  = require('multer')
const app = express();

// static middleware is registered to serve static
// contents from the static folder
app.use(express.static('static'));

// body-parser middleware is registered to parse
// form data.
app.use(bodyParser.urlencoded());

//view engine middle ware to serve dynamic pages
app.set('view engine','ejs');
// views or template folder is set.
app.set('views',path.join(__dirname,'dynamic'));

// multer object is created to upload files to the
// uploaded folder in the app.
var upload = multer({ dest: 'uploaded/' })

// Array to store users
users = [
    {name: 'Neeraj', mailId: 'a@b.com',password: '1234'}];


// Routes are defined to process requests of dynamic contents

app.post('/profile', upload.single('avatar'), 
function (req, res, next) {
    console.log('file is uploaded.');
    res.render('viewUsers',{'userList':users});
  })

app.post('/newUser',function(req,res){

    let user = req.body;
    users.push(user);
    res.render('saved',{'user':user});
});

app.get('/allUsers',function(req,res){
    res.render('viewUsers',{'userList':users});
});

app.get('/deleteUser',function(req,res){
    let mailId = req.query['email'];
    console.log('User with mailId '+mailId+' will be deleted.');
    // delete the user.
    res.render('viewUsers',{'userList':users});
});

app.listen(3000, ()=>{
    console.log('server is listening on port 3000');
});