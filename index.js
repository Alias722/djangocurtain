const express = require('express')

const App = new express()

App.get('/',(req,res)=>{
	res.send('Hello World')
})

App.listen('3000',()=>{console.log('server starting')})
