const express = require('express')
const router = express.Router();
const {getOnly} = require('../components/googleSheet.js')

router.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://remote.sivir.pw:3000');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Pass to next layer of middleware
    next();
});

router.get('/:code', async (req,res)=>{
    if(typeof(req.params.code) !== "undefined"){
        const result = await getOnly(req.params.code)
        if(result === 0){
            return res.send({
                status: "Not Found"
            })
        }else{
            return res.send({
                token: result
            })
        }
    }else{
        return res.status(403).send("Access Deny")
    }
})

module.exports = router;