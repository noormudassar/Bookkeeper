const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const {} = require(`./controller`);

app.listen(5050, () => console.log(`server running on 5050`));
