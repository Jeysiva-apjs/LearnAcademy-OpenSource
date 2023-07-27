const mongoose = require("mongoose");
require("dotenv").config();

const DB_CONNECT = process.env.DB_CONNECT;

mongoose.connect(
  "mongodb+srv://jey:1234@cluster0.1uxyuwe.mongodb.net/courses",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
