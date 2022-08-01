const express = require("express");
const cors = require("cors");
const OMDB = require("./controllers/omdbCtrl");
const { port } = require("./consts/consts");
const app = express();

app.use(cors());

app.use("/OMDB", OMDB);

app.listen(port, () => {
  console.log(`server listen on port: ${port}`);
});
