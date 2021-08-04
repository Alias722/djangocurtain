const express = require('express')
const router = express.Router();
const {getData} = require('../components/googleSheet.js')

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

router.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://remote.sivir.pw:3000');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Pass to next layer of middleware
    next();
});

router.post('/', async (req, res) => {
    console.log(req.body)
    if(typeof(req.body.url) !== "undefined"){
        //check if the link zipped before
        const token = makeid(7)
        const data = await getData(req.body.url,token)
        
        return res.send({
            token: data
        })

    }else{
        return res.status(405).send("Method Not Allowed")
    }
})

module.exports = router;