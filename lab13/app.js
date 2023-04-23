const express = require('express');
const studentRouter = require('./routers/studentRouter');
const courseRouter = require('./routers/courseRouter');
const app = express();

app.use(express.json());

app.use('/students', studentRouter);
app.use('/courses', courseRouter);

app.listen(3200, () => console.log("Listen on 3200"));