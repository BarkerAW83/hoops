const data = require('nba.js').data;
const stats = require('nba.js').stats;
const db = require('../database/index.js').db;
const Player = require('../database/index.js').Player;

db;

// data.players({ //populates database with vitals, and a numerical index 0-600ish
//   year: 2017
// }).then(function(res){
  
//   res.league.standard.forEach((player, idx) => {
    
//     var playerBuilder = {firstName: player.firstName, lastName: player.lastName, personId: player.personId, teamId: player.teamId, 
//       jersey: player.jersey, position: player.pos, heightFeet: player.heightFeet, heightInches: player.heightInches, weightPounds: player.weightPounds,
//       draftYear: player.draftYear, draftPick: player.draftPick, yearsPro: player.yearsPro, dateOfBirth: player.dateOfBirthUTC, localId: idx}

//     var newPlayer = new Player(playerBuilder);

//     newPlayer.save(function(err, newPlayer){
//       if (err) {
//         return console.error(err);
//       }  
//       else{
//         data.playerProfile({year: 2018, personId: playerBuilder.personId}, 
//           function(err, res){
//           if (err) {
//             console.error(err);
//           }
//           else{
//             if (res.league.standard.stats.regularSeason.season[0].total.rpg && res.league.standard.stats.regularSeason.season[0].total.rpg === '-1'){
//               var stat = res.league.standard.stats.regularSeason.season[1].total
//               Player.findOneAndUpdate({personId: playerBuilder.personId}, {assists: stat.assists, points: stat.points, blocks: stat.blocks, steals: stat.steals, turnovers: stat.turnovers, offReb: stat.offReb, defReb: stat.defReb, fgm: stat.fgm, fga: stat.fga, tpm: stat.tpm, tpa: stat.tpa, ftm: stat.ftm, fta: stat.fta, plusMinus: stat.plusMinus, min: stat.min}, function(err, data){
//                 if (err){
//                   console.error(err)
//                 }
//                 else{
//                   console.log('UPDATED', data);
//                 }
//               })
//             }
//             else{
//               var stat = res.league.standard.stats.regularSeason.season[0].total
//               Player.findOneAndUpdate({personId: playerBuilder.personId}, {assists: stat.assists, blocks: stat.blocks, points: stat.points, steals: stat.steals, turnovers: stat.turnovers, offReb: stat.offReb, defReb: stat.defReb, fgm: stat.fgm, fga: stat.fga, tpm: stat.tpm, tpa: stat.tpa, ftm: stat.ftm, fta: stat.fta, plusMinus: stat.plusMinus, min: stat.min}, function(err, data){
//                 if (err){
//                   console.error(err)
//                 }
//                 else{
//                   console.log('UPDATED', data);
//                 }
//               })
//             }
//           }
//         })
//       }
//     })
//   })
// }).catch(function(err){
//   console.error(err);
// })


Player.deleteMany({fga: null}, function (err) {}); //deleted players that never took a shot/played

// data.playerProfile({ //returns one players stats
//   year: 2018,
//   personId: 2772//203507//1628395
// }).then(function(res) {
//     console.log('NEW PLAYER', res.league.standard.stats.regularSeason.season[0].total)
// }).catch(function(err) {
//   console.error(err);
// });


///////////////


// var localIds = []

// Player.find({}, function(err, data){
//   if (err){
//     console.error(err)
//   }
//   else{
//     data.forEach((player)=>{
//       //console.log(player.localId);
//       localIds.push(player.localId);
//       //console.log('updated localIds = ', localIds);
//     })
//   }
// })

//console.log(localIds);


