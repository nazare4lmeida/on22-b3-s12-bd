require('dotenv').config();
const express = require("express"); // importo o express
const cors = require("cors"); // importo o cors

const mongoose = require("../database/dbConnect");
const booksRoutes = require("./routes/booksRoute"); // conecto as rotas
//const { default: mongoose } = require('mongoose');

const app = express();

app.use(express.json());
app.use(cors());
mongoose();


app.use("/library/books", booksRoutes); // crio uma rota raiz

// exportando para usar o server.js
module.exports = app;