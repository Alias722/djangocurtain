const express = require('express')

const App = new express()

App.get('/',(req,res)=>{
	return res.send('Hello World')
})

App.listen('8000',()=>{console.log('server starting')})
