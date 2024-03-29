const express = require("express")
const app = express()

const mongoose = require('mongoose')
const Product = require("./Product")

const port = process.env.PORT || 3000;


mongoose.connect("mongodb+srv://daisedalok:sifahdais@cluster0.m9apm8y.mongodb.net/reviews")

app.get('/product/search', async (req, res) =>{
console.log(`${req.query.search}`);
const allTasks = await Product.find({ Name : req.query.search})
    if(!allTasks || allTasks.length === 0) 
    {
    res.status(400).send({error : "No Product was found"})
    }else
    {
    res.status(200).json(allTasks)
    }
})


app.listen(port, () => {
    console.log("Connected!!!")
})


