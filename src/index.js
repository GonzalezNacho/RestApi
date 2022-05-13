const express = require('express');
const app =express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));//permite leer datos desde los formularios (input)
app.use(express.json()); //permite usar json

//routes
app.get('/',(req,res)=> {
    res.json({"Title":"Hello Word"});
})

//starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`)
});