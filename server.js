require('dotenv').config()
const express = require('express')
const app = express()


const port = process.env.PORT || 80000
app.listen(port,  ()=> console.log('Server on',port ))