const express = require("express");
const server =  express();

server.get("/", function(require, response){
    return response.send();
})


server.listen(3000);