// access to the express library by searching node_modules for "express". 
const express = require('express');
// create an instance of the express constructor will name "app".
const app = express();
// make a server by including their name after app.
app.listen(8000, function () {
    console.log("server is running")
})