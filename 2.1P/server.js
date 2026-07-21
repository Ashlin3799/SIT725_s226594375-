const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Home API
app.get('/api', (req, res) => {
    res.send("Calculator API is running.");
});


app.get('/add', (req, res) => {

    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.send("Please provide valid numbers using ?a=number&b=number");
    }

    const sum = a + b;

    res.send(`The sum of ${a} and ${b} is ${sum}`);

});

//  POST Addition
app.post('/add', (req, res) => {

    const { a, b } = req.body;

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({
            error: "Please provide valid numbers."
        });
    }

    res.json({
        sum: Number(a) + Number(b)
    });

});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});