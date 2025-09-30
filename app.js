const express = require('express')
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'courses' },
    { id: 2, name: 'courses2', },
    { id: 2, name: 'courses3' },
]

app.get('/', (req, res) => {
    res.send('Found Life Out Here!');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('Course Not Found.');
    res.send(course);
});

app.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});



// // Routes Params
// app.get('/api/post/:year/:month', (req, res) => {
//     res.send(req.params);
// });

// Query Parameters
// app.get('/api/post/:year/:month', (req, res) => {
//     res.send(req.query);
// });


//NB: Path/Routes Parameters: Use when the parameter is essential to identify the resource. 
// Query Parameters: Use when the parameter is optional or for filtering, sorting, or pagination.

//PORT
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Port ${port} Is Up And Running Rasta..`))