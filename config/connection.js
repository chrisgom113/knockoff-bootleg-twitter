const { connect, connection } = require("mongoose");

connect("mongodb://localhost/knockoff", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
