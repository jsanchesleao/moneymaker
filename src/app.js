const express = require('express');
const gamesController = require('./games/gamesController');

const app = express();

app.get('/api/games', gamesController.getGames);

app.use(express.static('public'));


app.listen(9001, function() {
  console.log('application successfully started on port :9001');
});

