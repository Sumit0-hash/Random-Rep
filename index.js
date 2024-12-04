require('dotenv').config()
const express = require('express')
// import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('My server is running.')
})
app.get('/twitter',(req,res)=>{
    res.send('xdotcom')
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please login!!</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>Welcome to Youtube</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})