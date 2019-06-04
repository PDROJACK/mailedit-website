const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('homepage',{title:'mailEdit', heading: 'MailEdit'});
});

module.exports = router;