const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.static("public"));

const {} = require(`./controller`);

app.listen(5050, () => console.log(`server running on 5050`));
