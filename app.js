const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');



var app = express();

// view engine setup
const history = require('connect-history-api-fallback');
app.use(history());

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

  app.set("port", process.env.port || 5000)

  app.listen(app.get("port"), ()=>{
    console.log("server in port ",+app.get("port"))
  })