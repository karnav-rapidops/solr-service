const express = require('express');
const app = express();
const port = 3002;
const router = require('./rest-service');

app.use(express.json());
app.use('/', router);


app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`);
})


