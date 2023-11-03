const express = require("express");
const app = express();
const port = 5000;
const user = require("./data/user");
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});
app.get('/api/user', (req,res) => {
  res.json(user)
});

app.listen(port, () => {
  console.log(`App is running at port ${port}`);
});