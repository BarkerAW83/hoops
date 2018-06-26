const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const pullPlayers = require('../helpers/helpers.js').pullPlayers;

app.use(express.static(path.join(__dirname, '/../dist')))

app.use(bodyParser.json())


app.get('/', (req, res) => res.send('Hello World from Server/index.js'));

app.listen(3000, ()=> console.log('test app listening from Server/index.js'))

app.get('/players', function(req, res){
  pullPlayers(req, res);
})

