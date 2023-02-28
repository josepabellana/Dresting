const express = require('express');

const router = express.Router();
const dressController = require('../controllers/dress')
//STORING INFORMATION WITH POSTGRESQL, RETRIEVING IT WITH GRAPHQL

router.get('/',(req,res)=>{
    res.send('<h1>Hello World!</h1>');
})

router.post('/addDress', dressController.addDress);




exports.router = router;