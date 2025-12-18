const express = require('express')

const app = express()

app.get('/', (req,res) => {

    res.send("Home Page")
})

app.get('/about', (req,res) => {

    res.send("About Page")
})

app.get('/contact', (req,res) => {

    res.send("contact Page")
})

app.get('/help', (req,res) => {

    res.send("help Page")
})

app.use((req,res) => {
    res.status(404).send("Page not found")
})

app.listen(3001, ()=> {

    console.log("Server Started at 3001")
})