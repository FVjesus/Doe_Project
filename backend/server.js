const express = require("express");
const server = express();

const nunjucks = require("nunjucks");

server.use(express.static('../web/public'));
server.use(express.urlencoded({ extended: true }));

const Pool = require('pg').Pool
const db = new Pool({
    user: 'postgres',
    password: '0000',
    host: 'localhost',
    port: 5432,
    database: 'doe'
})

nunjucks.configure("../web", {
    express: server,
    noCache: true,
});


server.get("/", function (require, response) {
    return response.render("index.html", { donors });
});

server.post("/", function (require, response) {
    const name = require.body.name;
    const email = require.body.email;
    const blood = require.body.blood;

    const query = `
        INSERT INTO donors ("name", "email", "blood")
        VALUES ($1, $2, $3)`

    db.query(query,[name, email, blood])

    return response.redirect("/");
});


server.listen(3000);