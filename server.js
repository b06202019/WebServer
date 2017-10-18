const express = require('express')

const app = express()

app.get('/',function(req,res){
    res.send('hello world')
})

app.get('/query',function(req,res){
    res.send('這是查詢的指令')
})

app.listen(3000, function () {
    console.log('Server running at http://127.0.0.1:3000')
  })