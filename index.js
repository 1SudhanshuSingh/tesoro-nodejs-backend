const express = require("express"),
  app = express(),
  cors = require("cors"),
  path = require("path"),
  morgan = require("morgan"),
  bodyParser = require("body-parser"),
  logger = require("./helpers/logger");
require("dotenv").config();

/* ----------------------------- routers import ----------------------------- */
const authentication = require("./routes/authentication");
const admin = require("./routes/admin");

const category = require("./routes/category");
const filter = require("./routes/filter");
const masterfilter = require("./routes/masterFilter");
const item = require("./routes/item");
const product = require("./routes/product");
const buyer = require("./routes/buyer");
// const images = require("./routes/images");
// const variation = require("./routes/variation");

/*

/* --------------------------- Middleware configs --------------------------- */
app.use(
  morgan("combined", {
    stream: {
      write: (message) => logger.info(message.trim()),
    },
  })
);

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));

/* ------------------------------- use routers ------------------------------ */
app.use("/api/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/auth", authentication);
app.use("/api/admin", admin);
app.use("/api/buyer", buyer);
app.use("/api/category", category);
app.use("/api/item", item);
app.use("/api/product", product);
app.use("/api/filter", filter);
app.use("/api/masterfilter", masterfilter);
// app.use("/api/images", images);
// app.use("/api/variation", variation);

// make server object that contain port property and the value for our server.
const server = {
  port: process.env.SERVER_PORT,
};

// starting the server
app.listen(server.port, () =>
  console.log(`Server started, listening port: ${server.port}`)
);
