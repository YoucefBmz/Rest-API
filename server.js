// https://www.youtube.com/watch?v=K1MrcnfSX2s&t=130s

const express = require("express");
//const router = require("./Routes/api/postsRoutes");
require("./connexion");

const app = express();
// bodyParser middleware ... to read json requests
app.use(express.json());

// routes ...
const routes = require("./Routes/api/postsRoutes");
app.use("/api/posts", routes);

// run server ...

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`);
});
