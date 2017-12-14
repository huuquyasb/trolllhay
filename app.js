//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');
//connect to mongodb
mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log('Connect to mongodb');
});
//port no
const port = 3000;
//adding middeware =cors
app.use(cors());
//body -parser
app.use(bodyparser.json());

//static file
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api', route);

//testing Server
app.get('/', (req, res) => {
    res.send('Wellcome to MEAN');
});

app.listen(port, () => {
    console.log('Server started at port: ' + port);
});