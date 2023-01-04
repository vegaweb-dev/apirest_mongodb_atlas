const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config();

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const userRoutes = require('./routes/user');

//set port
app.set('port', process.env.PORT || 3000);

//Middlewares
// app.use('/api', userRoutes);
app.use(express.json());
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));

//Routes
// app.use('/', (req, res) => {
//   res.send('probando');
// });
app.use('/api', userRoutes);
//app.use('/', require('./routes/user'));

//Conexion a base de datos
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('conectada a base de datos');
  })
  .catch((error) => {
    console.error(error);
  });
//starting server
app.listen(app.get('port'), () => {
  console.log(`Server Running on Port ${app.get('port')}`);
});

module.exports = app;
