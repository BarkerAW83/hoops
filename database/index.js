var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hoops');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  'DATABASE CONNECTED, HOMIE'
})

var playerBuilder = {firstName: player.firstName, lastName: player.lastName, personId: player.personId, teamId: player.teamId, 
jersey: player.jersey, position: player.pos, heightFeet: player.heightFeet, heightInches: player.heightInches, weightPounds: player.weightPounds,
draftYear: player.draftYear, draftPick: player.draftPick, yearsPro: player.yearsPro, dateOfBirth: player.dateOfBirthUTC}

var playerSchema = mongoose.Schema({ 
  firstName: String,
  lastName: String,
  personId: String, //Number
  teamId: String, //Number
  jersey: String, //Number
  position: String,
  heightFeet: String, //Number
  heightInches: String, //Number
  weightPounds: String, //Number
  draftYear: String, //Number
  draftPick: String, //Number
  collegeName: String,
  yearsPro: String, //Number
  dateOfBirth: String

});

var Player = mongoose.model('Player', playerSchema);

module.exports.db = db;
module.exports.Player = Player;