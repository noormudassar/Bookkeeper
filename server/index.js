const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());


app.use(express.json());
app.use(express.static("public"));

const { getBooks, deleteBook, createBook } = require(`./controller`);

app.get(`/api/books`, getBooks);
app.delete(`/api/books/:id`, deleteBook);
app.post(`/api/books`, createBook);

app.listen(5050, () => console.log(`server running on 5050`));
