const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());


app.listen(5001, () => {
    console.log("Server running on port 5000")
})