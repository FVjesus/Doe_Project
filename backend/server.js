const express = require("express");
const server =  express();

const nunjucks = require("nunjucks");

server.use(express.static('../web/public'));
server.use(express.static('../web/assets'));

nunjucks.configure("../web",{
    express: server
});

server.get("/", function(require, response){
    return response.render("index.html");
})


server.listen(3000);