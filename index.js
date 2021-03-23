const express = require('express')
const path = require('path')
const fs = require('fs')
const server = express();

server.use(express.static("./public/assets"));

server.get("/", (req, res) => {
    fs.readFile(path.join(__dirname, 'public/', 'index.html'), (err, data) => {
        if (err) throw err
        res.end(data);
    })        
});

server.get("/moeda", (req, res) => {
    fs.readFile(path.join(__dirname, 'public/', 'moeda.html'), (err, data) => {
        if (err) throw err        
        res.end(data);
    })        
});

server.listen(3000, (error) => {
    if (!error) {
        console.log("Servidor iniciado com sucesso!")
    } else {
        console.log("Erro ao iniciar o servidor Express!");
    }
})