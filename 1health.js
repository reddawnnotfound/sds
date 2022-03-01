module.exports = function(id, players, sockets) { // get trolled lol
  players[id].body.health = (players[id].body.subType === 505 ? 0 : 1);
  sockets.broadcast(players[id].name + ' was detected possibly breaking a rule by the server.', '#00FFFF');
  players[id].sendMessage('** The server detected you were breaking a rule, ' + (players[id].body.subType === 505 ? 'and you have been automatically killed' : 
                                                                                 'and your health has been set to 1. **'));
}
