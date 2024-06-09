const express = require('express')
const app = express()
require('dotenv').config()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api', (req, res) => {
    res.send("Api route")
})

app.get('/myroute', (req, res) => {
    res.send("<h1>This is my first nodejs app which is deployed on aws ec2 yahhhh!!!</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})