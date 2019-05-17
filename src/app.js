const http = require('http');
const express = require('express');
const spoilersRoute = require('./routes/spoilers');

const app = express();

const host = "127.0.0.1";
const port = 3000;

app.set("port", port);

app.set(express.json());

app.use('/api', spoilersRoute);

app.use((request, response, next) => {
    response.status(400).send();
});

const server = http.createServer(app);
server.listen(port, host, ()=> {
    console.log(`Link Api: http://${host}:${port}/api/spoilers`);
});