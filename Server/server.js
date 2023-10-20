const express = require("express");
const app = express();
const port = 5000;
const user = require("./data/user");
const cors = require("cors");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");
// dotenv.config();
// const todoRoutes = require("./routes/todoRoutes");
// const PORT = process.env.PORT;
// connectDB();

// const corsOptions = {
//   origin: "*",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };

app.use(cors()); // Use this after the variable declaration

// app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});
app.get('/api/user', (req,res) => {
  res.json(user)
});

// app.use("/todoRoutes", todoRoutes);

app.listen(port, () => {
  console.log(`App is running at port ${port}`);
});