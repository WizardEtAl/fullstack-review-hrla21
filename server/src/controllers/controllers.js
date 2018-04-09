const db = require('../DB/index');

const savePlayer = (req, res) => {
  console.log('------', req.body);
  //invoke db sabe function
  db.saveOne(req.body, (string) => {
    res.status(201).send(string);
  });
  // pass callback to save that returns status
};

const getAllPlayers = (req, res) => {
  db.grabAll((players) => {
    console.log(players);
    res.status(201).send(players);
  });
  //invoke db query to grab all players
  // pass callback to 
};

const addUser = (req, res) => {
  console.log('add user is hapn', req.body);
  db.addUser(req.body, (message) => {
    res.status(201).send(message);
  });
};

const login = (req, res) => {
  console.log('this is req.params', req.params);
  db.login(req.params, (message) => {
    res.status(201).send(message);
  });
};
exports.savePlayer = savePlayer;
exports.getAllPlayers = getAllPlayers;
exports.addUser = addUser;
exports.login = login;