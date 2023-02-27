const express = require('express');

const router = express.Router();
const {addDress} = require('../controllers/dress')
//STORING INFORMATION WITH POSTGRESQL, RETRIEVING IT WITH GRAPHQL

router.get('/',(req,res)=>{
    res.send('<h1>Hello World!</h1>');
})

router.post('/addDress',);




exports.router = router;