const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.get('/register', (req, res) => {
    res.send(`Hello from Here`)
})

app.post('/register', (req, res) => {
    res.send(`Hello from Here`)
})


const port = 5000 || process.env.port;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});