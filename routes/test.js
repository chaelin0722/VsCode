const express = require('express');
const router = express.Router();
router.get('/',(req,res)=>{
    console.log("it's working");
    res.send("this is router.get");
})


module.exports = router;
