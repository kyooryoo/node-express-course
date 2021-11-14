// access to the express library by searching node_modules for "express". 
const express = require('express');
// create an instance of the express constructor will name "app".
const app = express();
// use bodyparser library for POST action
const bodyParser = require('body-parser');
app.use(bodyParser.json());


// create some mock data in Json
const mockUserData = [
    { name: 'Mark' },
    { name: 'Jill' }
]

// crate the first get route
app.get('/users', function (req, res) {
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    })
})

// crate a dynamic route with passed in param
app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})

app.post('/login',function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    const mockUsername="billyTheKid";
    const mockPassword="superSecret";

    if (username===mockUsername && password===mockPassword){
         res.json({
              success: true,
              message: 'password and username match!',
              token: 'encrypted token goes here'
         })
    } else {
         res.json({
              success: false,
              message: 'password and username do not match'
         })
    }
})

// make a server by including their name after app.
app.listen(8000, function () {
    console.log("server is running")
})