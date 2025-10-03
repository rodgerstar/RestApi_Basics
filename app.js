const Joi = require('joi');
const express = require('express');
const app = express();


app.use(express.json());

const courses = [
    { id: 1, name: 'courses' },
    { id: 2, name: 'courses2', },
    { id: 3, name: 'courses3' },
]

function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    return schema.validate(course);
}

app.get('/', (req, res) => {
    res.send('Found Life Out Here!');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('Course Not Found.');
    res.send(course);
});

app.post('/api/courses', (req, res) => {

    const { error } = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message);
        
    

    // if (!req.body.name || req.body.name <3) {
    //     res.status(404).send('Name should have a minminum of 5')
    //     return;
    // }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course)  return res.status(404).send('Course Not With Id Not Found.');

    const { error } = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    course.name = req.body.name;
    res.send(course);
});




app.delete('/api/courses/:id', (req, res) => {
//look course
const course = courses.find(c => c.id === parseInt(req.params.id));
// not exist return 404
if (!course) return res.status(404).send('Course Not With Id Not Found.');
// delete
const index = courses.indexOf(course);
courses.splice(index, 1);
//return course
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