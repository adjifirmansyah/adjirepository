const express = require("express");
const app = express();
const port = 3307;

const { sequelize } = require("./models");
//sequelize.sync({ force: true });

const routerUser = require("./controllers/user/userRouter");
app.use(express.json());
const routerBook = require("./controllers/book/bookRouter");
app.use(express.json());

app.use("/users", routerUser);
app.use("/books", routerBook);

app.get("/", (req, res) => {
    res.send("HELLO WORLD GUYS UPDATE LAGI");
});

app.post('/', function(req, res) {
    res.send('POST HELLO WORLD')
})

app.put('/', function(req, res) {
    res.send('PUT HELLO WORLD')
})

app.delete('/', function(req, res) {

    res.send('DELETE HELLO WORLD')
})

// app.get("/:judul", (req, res) => {
//     res.send("Dynamic Routing Hello : " + req.params.judul);
// });

app.get("/query", (req, res) => {
    res.send(req.query)
});
app.get("/json", (req, res) => {
    const response = { success: true, message: "data buku berhasil diterima" };
    res.status(500).json(response);
});

app.listen(port, () => {
    console.log(`listen at http://localhost:${port}`);
});