require('dotenv').config();

const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./client/build'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// declare routes for app
const routes = require('./routes');

//how to use routes
app.use(routes);
app.listen(PORT, () => console.log(`Port started on PORT: ${PORT}`));
