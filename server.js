const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.json({ message: "Welcome to CRUD application" });
  });
app.listen(port, () => console.log(`'API server started on: ' + ${port}`))

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

var routes = require('./routes/approutes');
routes(app);