const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');

// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now());
//   next();
// });
// define the home page route
// router.get('/', function (req, res) {
//   res.send('Birds home page');
// });
// define the about route
router.get('/playersList', controller.getAllPlayers);

router.post('/submit-player', controller.savePlayer);

router.post('/users', controller.addUser);

router.get('/users/:username/:password', controller.login);

module.exports = router;