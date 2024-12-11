const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Element = require('./models/element.js');

const cors = require('cors')
app.use(cors())

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
  });
  
  app.use(express.json());
  
  // Routes go here

//post 
app.post('/elements', async (req,res) => {
    const newElement = await Element.create(req.body)
    res.json(newElement)
  })
//index
app.get('/elements', async (req,res) => {
    const foundElements = await Element.find()
    res.json(foundElements)
})
//delete
app.delete('/elements/:elementId', async (req,res) => {
    const deletedElement = await Element.findByIdAndDelete(req.params.elementId)
    res.json(deletedElement)
})
//update
app.put('/elements/:elementId', async (req, res) => {
    const updatedElement = await Element.findByIdAndUpdate(req.params.elementId, req.body, {new:true})
    res.json(updatedElement)
})



  app.listen(3000, () => {
    console.log('The express app is ready!');
  });