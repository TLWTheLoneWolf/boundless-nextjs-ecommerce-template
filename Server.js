const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
app.use(express.json());

// Replace <password> with your actual database password
const uri = 'mongodb+srv://nope:nope@groupprojectdatabase.jkflndx.mongodb.net/?retryWrites=true&w=majority&appName=GroupProjectDatabase';
const client = new MongoClient(uri);

let db;
client.connect().then(() => {
    db = client.db('pizza_shop');
    console.log('Connected to the database');
});

// CRUD for Pizzas
app.post('/pizzas', async (req, res) => {
    const pizza = req.body;
    const result = await db.collection('pizzas').insertOne(pizza);
    res.status(201).json(result.ops[0]);
});

app.get('/pizzas/:id', async (req, res) => {
    const pizza = await db.collection('pizzas').findOne({ _id: ObjectId(req.params.id) });
    if (pizza) {
        res.json(pizza);
    } else {
        res.status(404).json({ message: 'Pizza not found' });
    }
});

app.put('/pizzas/:id', async (req, res) => {
    const updatedPizza = req.body;
    const result = await db.collection('pizzas').updateOne(
        { _id: ObjectId(req.params.id) },
        { $set: updatedPizza }
    );
    res.json(result);
});

app.delete('/pizzas/:id', async (req, res) => {
    const result = await db.collection('pizzas').deleteOne({ _id: ObjectId(req.params.id) });
    res.json(result);
});

// CRUD for Orders
app.post('/orders', async (req, res) => {
    const order = req.body;
    const result = await db.collection('orders').insertOne(order);
    res.status(201).json(result.ops[0]);
});

app.get('/orders/:id', async (req, res) => {
    const order = await db.collection('orders').findOne({ _id: ObjectId(req.params.id) });
    if (order) {
        res.json(order);
    } else {
        res.status(404).json({ message: 'Order not found' });
    }
});

app.put('/orders/:id', async (req, res) => {
    const updatedOrder = req.body;
    const result = await db.collection('orders').updateOne(
        { _id: ObjectId(req.params.id) },
        { $set: updatedOrder }
    );
    res.json(result);
});

app.delete('/orders/:id', async (req, res) => {
    const result = await db.collection('orders').deleteOne({ _id: ObjectId(req.params.id) });
    res.json(result);
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
