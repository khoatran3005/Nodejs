require('dotenv').config()
const express = require('express');
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

//config template engine
configViewEngine(app);

app.use('/', webRoutes);

connection();

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})

