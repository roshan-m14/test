const express = require('express');
const cors = require('cors'); 
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to read JSON and allow external phone connections
app.use(express.json());
app.use(cors()); 

// ==========================================
// THE DATABASE (In-Memory Array)
// ==========================================
let confessions = [
    { id: 1, alias: "System", secretText: "Welcome to the MILA Anonymous Confession Board!" }
];

// ==========================================
// LAB TEST INSTRUCTIONS:
// Write your GET and POST endpoints below!
// The endpoints must be named exactly: /api/confessions
// ==========================================

// Task 1: Write the GET route here
app.get('/api/confessions', (req, res) => {
    res.status(200).json(confessions);
});

// Task 2: Write the POST route here
app.post('/api/confessions', (req, res) => {
    const { alias, secretText } = req.body;

    const newConfession = {
        id: confessions.length + 1,
        alias: alias || 'Anonymous',
        secretText: secretText || ''
    };

    confessions.push(newConfession);

    res.status(201).json({
        message: "Confession Posted Successfully",
        data: newConfession
    });
});

// ==========================================
// START SERVER
// ==========================================
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});