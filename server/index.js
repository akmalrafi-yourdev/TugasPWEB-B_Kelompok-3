const express = require("express");
const cors = require("cors");
const db = require("./config/database");
const Router = require("./routes/routes");

const app = express();
app.use(express.json());
app.use(cors());

async function main() {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

app.use(Router);

const port = 5500;

app.listen(port, () =>
  console.log(`Server dah nyala sluuurrr... Portnya: ${port}`)
);
