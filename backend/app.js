var createError = require("http-errors");
var express = require("express");
const socketio = require("socket.io");
const http = require("http");
const PORT = process.env.PORT || "3000";
const app = express();
const server = http.createServer(app);
const io = socketio(server);
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const genresRouter = require("./routes/genres");
const booksRouter = require("./routes/books");
const librariesRouter = require("./routes/libraries");
const needsRouter = require("./routes/needs");
const exchangesRouter = require("./routes/exchanges");
const loginRouter = require("./routes/login");
const signUpRouter = require("./routes/signUp");
const addBookRouter = require("./routes/addBook");
const addNeedRouter = require("./routes/addNeed");
const bookSearchRouter = require("./routes/bookSearch");
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig["development"]);
const cors = require("cors");
const dbHelpers = require("./helpers/dbHelpers")(knex);
const test = require("./routes/test");

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
app.use("/api/signup", signUpRouter(dbHelpers));
app.use("/api/books/add", addBookRouter(dbHelpers));
app.use("/api/needs/add", addNeedRouter(dbHelpers));
app.use("/api/books/search", bookSearchRouter(dbHelpers));

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

//--------- Websocket implementation ----------//
app.use(test);
// listeners
io.on("connection", (socket) => {
  console.log("Client Connected!");
});

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));

module.exports = app;
