const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://jey:1234@cluster0.1uxyuwe.mongodb.net/courses",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
