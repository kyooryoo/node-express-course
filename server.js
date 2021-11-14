// access to the express library by searching node_modules for "express". 
const express = require('express');
// create an instance of the express constructor will name "app".
const app = express();

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

// make a server by including their name after app.
app.listen(8000, function () {
    console.log("server is running")
})