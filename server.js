const express = require('express');
const routes = require('./controller');
// import sequelize connection
const sequelize = require('./config/connection');
// import express-session
const session = require('express-session');
// import express-handlebars
const exphbs = require('express-handlebars');


const app = express();
const PORT = process.env.PORT || 3001;

// set up session
const sess = {
  secret: 'What it Is?',
  cookies: {
    httpOnly: true,
    secure: false,
    samesite: 'strict',
    maxage: null,
  }
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});