const express = require('express');
const app =express();
const morgan = require('morgan');

//middlewares
app.use(morgan('dev'));

//starting the server
app.listen(3000, ()=>{
    console.log(`Server on port ${3000}`)
});