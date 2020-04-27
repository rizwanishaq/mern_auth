const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

// set up express
const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/users", require("./routes/userRouter"));

// Connecting to mongodb
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));
