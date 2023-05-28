const router = require('express').Router();
const userModel = require('../Model/userModel');

router.get('/',async (req,res)=>{
    const userEmail = req.body.email;

    const response = await userModel.findOne({ email: userEmail})
    console.log(response);
})

module.exports = router;