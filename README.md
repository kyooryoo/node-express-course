# NodeJs and Express Tutorial
A learning course from [Git Lab](https://lab.github.com/everydeveloper/introduction-to-node-with-express)

## Description
This is a NodeJS and Express intro tutorial.
Here is the note for the course.

## Setup
0. Check environment
% node -v
% npm -v
% git --version
1. Download or clone this repo
% git clone https://github.com/kyooryoo/node-express-course.git      
% cd node-express-course
2. Install dependencies: npm install
% npm init -y
% npm install express --save
% git add .
% git commit -m "initial file setup"
% git push origin master
3. Update the server.js file
```
import express from 'express';
const app = express();
app.listen(8000, function () {
    console.log("server is running")
})
```
4. Start the server file: node server.js
% node server.js
Check the server in browser *http://localhost:8000*
CTRL + C to stop the server from running 
% git add .
% git commit -m "setup express server"
% git push origin master
5. Add mock data and a Get route
Add the following code into server.js:
```
const mockUserData = [
    { name: 'Mark' },
    { name: 'Jill' }
]

app.get('/users', function (req, res) {
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    })
})
```
Check the result at *http://localhost:8000/users*
% git add .
% git commit -m "add first GET route"
% git push origin master