var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();
const app = express();
var debug = require("debug")("bookmates:server");
var http = require("http");
const socketio = require("socket.io");
const server = http.createServer(app);
const io = socketio(server);

/**
 * Get port from environment and store in Express.
 */

var port = process.env.PORT || "3001";
app.set("port", port);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

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

//----- test route for socket -------//
app.get("/test", (req, res) => {
  res.send("OK");
});
//----- Serverside socket logic --------//

io.on("connection", (socket) => {
  let clients = [];
  console.log("user has connected!");

  socket.on("user", (data) => {
    clients.push(data.username);
    console.log("CLIENTS HERE", clients);
  });

  socket.on("message", (data) => {
    console.log(data);
    io.emit("message", data);
  });

  socket.on("disconnect", function () {
    let pos = clients.map((client) => clients.indexOf(client));
    clients.splice(pos, 1);
    io.emit("users", { clients });
    console.log("user disconnected");
  });
});

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

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
  console.log("listening on port 3001");
}
