const express = require('express')
const path = require('path')

const app = express()

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/index.html'))
})

app.listen(4005, () => console.log(`Running on port 4005`)) 