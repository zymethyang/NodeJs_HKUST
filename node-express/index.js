const express = require('express'),http = require('http');
const hostname = 'localhost';
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();
const dishRouter = require('./routes/dishRouter');

app.use('/dishes', dishRouter);
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));


const server = http.createServer(app);
server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
