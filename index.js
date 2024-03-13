const App = require("./app");
const connectDB = require("./config/mongo");

const port = process.env.PORT || 5000;

App.listen(port, () => {
  connectDB();
  console.log(
    "listening on port " + port + " on " + `${process.env.NODE_ENV} server`
  );
});
