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


// // Routes Params
// app.get('/api/post/:year/:month', (req, res) => {
//     res.send(req.params);
// });

// Query Parameters
app.get('/api/post/:year/:month', (req, res) => {
    res.send(req.query);
});


//NB: Path/Routes Parameters: Use when the parameter is essential to identify the resource. 
// Query Parameters: Use when the parameter is optional or for filtering, sorting, or pagination.

//PORT
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Port ${port} Is Up And Running Rasta..`))