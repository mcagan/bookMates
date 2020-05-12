var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var genresRouter = require("./routes/genres");
var booksRouter = require("./routes/books");
var librariesRouter = require("./routes/libraries");
var needsRouter = require("./routes/needs");
var exchangesRouter = require("./routes/exchanges");
var loginRouter = require("./routes/login");
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig["development"]);
const cors = require("cors");
const dbHelpers = require("./helpers/dbHelpers")(knex);

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/users", usersRouter(dbHelpers));
app.use("/api/genres", genresRouter(dbHelpers));
app.use("/api/books", booksRouter(dbHelpers));
app.use("/api/libraries", librariesRouter(dbHelpers));
app.use("/api/needs", needsRouter(dbHelpers));
app.use("/api/exchanges", exchangesRouter(dbHelpers));
app.use("/api/login", loginRouter(dbHelpers));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
