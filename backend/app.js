const express = require("express");
const auth = require("./routes/auth");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(auth);
const port = process.env.PORT || 5555;
app.listen(port, () => {
    console.log('app listening on port ${port}');
});