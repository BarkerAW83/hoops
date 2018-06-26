const data = require('nba.js').data;
const stats = require('nba.js').stats;
const db = require('../database/index.js').db;
const Player = require('../database/index.js').Player;

db;


// data.players({
//   year: 2017
// }).then(function(res){
//   //console.log(res.league.standard) 

//   res.league.standard.forEach((player) => {

//     var playerBuilder = {firstName: player.firstName, lastName: player.lastName, personId: player.personId, teamId: player.teamId, 
//       jersey: player.jersey, position: player.pos, heightFeet: player.heightFeet, heightInches: player.heightInches, weightPounds: player.weightPounds,
//       draftYear: player.draftYear, draftPick: player.draftPick, yearsPro: player.yearsPro, dateOfBirth: player.dateOfBirthUTC}

//     //console.log('NEXT PLAYER IS: ', player)
//     var newPlayer = new Player(playerBuilder);

//     newPlayer.save(function(err, newPlayer){
//       if (err) {
//         return console.error(err);
//       }
//       else{
//         console.log('NEW PLAYER IS: ', playerBuilder.lastName)
//       }
//     })
//   })
// }).catch(function(err){
//   console.error(err);
// })

data.playerProfile({
  year: 2017,
  personId: 203112

}).then(function(res) {
  // console.log('RES IS', res.league.standard.stats);
  console.log('RES IS', res.league.standard.stats.latest);
}).catch(function(err) {
  console.error(err);
});

//var statBuilder = {assists: stat.assists, blocks: stat.blocks, steals: stat.steals, turnovers: stat.turnovers, offReb: stat.offReb, defReb: stat.defReb, fgm: stat.fgm, fga: stat.fga, tpm: stat.tpm, tpa: stat.tpa, ftm: stat.ftm, fta: stat.fta, plusMinus: stat.plusMinus, min: stat.min}