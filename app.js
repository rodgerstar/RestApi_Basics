const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('Found Life Out Here!');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});

app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
});

//PORT
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Port ${port} Is Up And Running Rasta..`))