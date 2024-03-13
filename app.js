const promBundle = require("express-prom-bundle");
const express = require("express");
const metricsMiddleware = promBundle({ includeMethod: true });
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const contactRouter = require("./routes/contact.routes");
const mongoSanitize = require("express-mongo-sanitize");

app.use(metricsMiddleware);
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: 10000 }));
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());

app.use("/contacts", contactRouter);

app.get("/", (req, res) => {
  res.send(`Currently working on ${process.env.NODE_ENV} server`);
});

module.exports = app;
