const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const userRoutes = require("./Server/routes/UserRouts");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1/user", userRoutes);

app.listen(3000, () => {
  console.log(`server started at ${3000}`);
});
