const express = require("express");
const app = express();

// Allow CORS requests
const cors = require("cors");
app.use(cors());

// Configure body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Mount resources to application middleware
app.use(require("./resources"));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

module.exports = app;
