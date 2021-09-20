const dotenv = require('dotenv');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

dotenv.config({ path: './config.env' })

require("./DB/connection");

app.use(express.json());
app.use(cookieParser());

app.use(require('./router/auth'));

const PORT = process.env.PORT;


app.get('/', (req, res) => {
    res.send(`Hello world from Home`);
});

app.get('/signin', (req, res) => {
    res.send(`Hello world from Sign in`);
});

app.get('/register', (req, res) => {
    res.send(`Hello world from Sign up`);
});



app.listen(PORT, () => {
    console.log(`sevrer is running at port no ${PORT}`);
});