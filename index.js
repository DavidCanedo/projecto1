const express = require('express');
const http = require('http');

const app = express();

const exphbs = require('express-handlebars');


//app.engine('handlebars', hbs.engine);
//app.set('view engine', 'handlebars');

app.use(require('./routes/index'));


app.set('port', 8443);


http.createServer(app)
  .listen(app.get('port'), () => console.log("Servicio inicializado"));
