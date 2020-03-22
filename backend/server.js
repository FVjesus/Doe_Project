const express = require("express");
const server = express();

const nunjucks = require("nunjucks");

server.use(express.static('../web/public'));

nunjucks.configure("../web", {
    express: server,
    noCache: true,
});


const donors = [
    {
        name: "Fabrício Veloso",
        blood: "AB+"
    },
    {
        name: "Erick Joho",
        blood: "B-"
    },
    {
        name: "Kadmus Krigem",
        blood: "O+"
    },
    {
        name: "Homer Simpson",
        blood: "AB-"
    }
]

server.get("/", function (require, response) {
    return response.render("index.html", { donors });
})


server.listen(3000);