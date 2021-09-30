const mongoose = require("mongoose");
const uri =
  "mongodb+srv://YoucefBmz:youcefbmz123@cluster0.4dggv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connected !!");
  })
  .catch((err) => {
    console.log("error db :( ... ", err);
  });
