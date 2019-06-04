const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const {User} = require('../models/user');
const Joi = require('joi');



router.post('/',async (req,res)=>{
    const {error} = validate(req.body);
    if(error){
        return res.status(400).status(error.details[0].message);
    }

    let user = await User.findOne({email: req.body.email});
    if(!user){
        return res.status(400).send('Invalid email or password');
    }

    const isValidPassword = await bcrypt.compare(req.body.password,user.password);
    if(!isValidPassword){
        return res.status(400).send('Invalid email or password');
    }

    res.send("true");
})

function validate(user){
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(8).max(1024).required()
    };

    return Joi.validate(user, schema);
}

module.exports = router;