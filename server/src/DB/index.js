var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basketball');

var playerSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  number: String,
  position: String,
  height: String,
  weight: String,
  age: String,
  image: String,
  college: String,
  team: String
});

var Player = mongoose.model('Player', playerSchema);

const saveOne = (player, callback) => {
  console.log(player);
  // if player in db 
  Player.find({firstName: player.firstName, lastName: player.lastName }, (err, data) => {
    if (err) {
      console.log(err);
    }
    if (!!data.length) {
      //notify with response
      callback('he already here bruh');
    } else {
      //else make new player and save to db
      //notify success save
      const newPlayer = new Player(player);
      newPlayer.save((err, savedPlayer) => {
        if (err) {console.log(err);}
        callback('successfully saved a new player');
      });
    }
  });
};

const grabAll = (callback) => {
  Player.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      callback(data);
    }
  })
}

var userSchema = mongoose.Schema({
  username: String,
  password: String
});

var User = mongoose.model('User', userSchema);

var addUser = (user, callback) => {
  new User ({
    username: user.username,
    password: user.password
  }).save((err) => {
    callback('user was added to db');
  });
};

// addUser();

const login = (user, callback) => {
  User.find({username: user.username}, (err, data) => {
    if (err) {console.log(err)};
    console.log('this is datas pw', data[0].password)
    console.log('this is users pw', user.password)
    if(data[0].password === user.password) {
      callback('passwords match')
    } else {
      callback('pw dont match');
    }
  })
}

exports.saveOne = saveOne;
exports.grabAll = grabAll;
exports.addUser = addUser;
exports.login = login;