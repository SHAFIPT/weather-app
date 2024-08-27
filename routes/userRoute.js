const express = require('express');
const user_route = express();

user_route.set('view engine','ejs');
user_route.set('views','./views/users');
user_route.use(express.json())
user_route.use(express.urlencoded({extended:true}))

const userController = require('../controllers/userController');


user_route.get('/',userController.loadRegister);

user_route.post('/',userController.insertUser);

user_route.get()

module.exports = user_route; 