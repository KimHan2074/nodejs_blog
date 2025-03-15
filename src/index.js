const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public'))); /*static file*/

app.use(morgan('combined')) ;
app.use(express.urlencoded({
  extended:true
}
)); /*middleware xử lý dữ liệu từ form submit lên cho server*/
app.use(express.json()); /*middleware xử lý dữ liệu từ client gửi lên cho server*/


// Template engine
app.engine('hbs',handlebars.engine({
  extname: '.hbs' /*đổi phần mở rộng của tên file*/
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource\\views'));
// console.log("Path: ", path.join(__dirname, 'resource\\views'));

// write route
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

