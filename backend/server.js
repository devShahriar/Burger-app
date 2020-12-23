const express = require('express');
const path = require('path')
require('dotenv').config()
const body_parser = require('body-parser')
const app = express();
const cors =require('cors')
const shopRouter = require('./router/shopRouter')
app.use(body_parser.json());
app.use(cors());
app.use(shopRouter);

app.listen(9000, console.log('sever started at port 9000'));