// server.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Validate credentials (e.g., check against database)
    // Redirect to dashboard or show error message
    res.send(`Welcome, ${username}!`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
