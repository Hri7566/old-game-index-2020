const express = require('express');
const app = express();
const server = app.listen(80);
const io = require('socket.io')(server);
const path = require('path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', {
        title: "Welcome"
    });
});

app.get('/games', (req, res) => {
    res.render('games/index', {
        title: "Games"
    });
});

app.get('/games/flappy', (req, res) => {
    res.render('flappy/index', {
        title: "Bappy Flird"
    });
});

io.on('connection', () => {
    
});