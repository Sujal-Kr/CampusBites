const router = require('express').Router();
const userModel = require('../Model/userModel');

router.get('/',async (req,res)=>{
    const num = Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000;
    res.json(num);
    
})



module.exports = router;