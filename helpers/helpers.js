const db = require('../database/index.js').db;
const Player = require('../database/index.js').Player;

//db;

var pullPlayers = function(req, res){
  Player.find({}, function(err, data){
    if (err){
      //console.error(err)
      res.status(500).send(err);
    }
    else{
      console.log(data);
      //return data;
      res.status(202).send(data);
    }
  })
}

//pullPlayers;

module.exports.pullPlayers = pullPlayers;