let express = require("express");
let app = express();
require("dotenv").config();
app.use(express.json());
let mongoose = require("mongoose");
mongoose.connect(process.env.DBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let mongoosStatus = mongoose.connection;
mongoosStatus.on("error", () => {
  console.log("connection error");
});

mongoosStatus.once("connected", () => {
  console.log("it is connected");
});

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`this is a connection${process.env.HOST}`);
});

let userRouter = require("./_route/Routes");
app.use("/user", userRouter);