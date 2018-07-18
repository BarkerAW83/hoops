const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const pullPlayers = require('../helpers/helpers.js').pullPlayers;

app.use(express.static(path.join(__dirname, '/../dist')))

app.use(bodyParser.json())

//app.get('/', (req, res) => res.send('Default connectionfrom server/index.js'));

app.listen(3000, ()=> console.log('Hoops server listening from server/index.js'))

app.get('/players', function(req, res){
  pullPlayers(req, res);
})

