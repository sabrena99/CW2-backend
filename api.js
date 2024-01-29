// api.js
const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ObjectID } = require('mongodb');

const apiRouter = express.Router();
apiRouter.use(bodyParser.json());


const mongoURI = 'mongodb+srv://ss4312:sabmd99.@cluster0.tcmovjb.mongodb.net/mydatabase?retryWrites=true&w=majority';
let db;

MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB');
  db = client.db('<mydatabase>');
});

// Middleware for logging
apiRouter.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Get lessons
apiRouter.get('/lessons', async (req, res) => {
  try {
    const lessons = await db.collection('lessons').find({}).toArray();
    res.json(lessons);
  } catch (error) {
    console.error('Error retrieving lessons:', error);
    res.status(500).send('Internal Server Error');
  }
});


apiRouter.post('/orders', async (req, res) => {
  try {
    const orderData = req.body;
    await db.collection('orders').insertOne(orderData);
    res.send('Order received!');
  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).send('Internal Server Error');
  }
});


apiRouter.put('/update-lesson/:lessonId', async (req, res) => {
  try {
    const lessonId = new ObjectID(req.params.lessonId);
    const updatedSpaces = req.body.updatedSpaces;
    await db.collection('lessons').updateOne({ _id: lessonId }, { $set: { spaces: updatedSpaces } });
    res.send('Lesson updated!');
  } catch (error) {
    console.error('Error updating lesson:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = apiRouter;
