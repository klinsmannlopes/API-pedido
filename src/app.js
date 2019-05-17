const http = require('http');
const express = require('express');

const app = express();

const host = "127.0.0.1";
const port = 3000;

app.set("port", port);
const server = http.createServer(app);

app.use((request, response, next) => {
    response.status(400).send();
});

server.listen(port, host, ()=> {
    console.log("teste");
});