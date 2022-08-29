const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("config");
const path = require("path");

app.use(require("cors")());
app.use(express.json());

const uri = config.get("ATLAS_URI");
// console.log(uri);
mongoose
  // .connect(process.env.MONGODB_URI || uri, {
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`connection to database established`);
  })
  .catch((err) => {
    console.log(`db error ${err.message}`);
    process.exit(-1);
  });

const QuestionsPageRoute = require("./routes/questionsRoute");
const AnswerPageRoute = require("./routes/answersRoute");
const SignupRoute = require("./routes/signupRoute");
const LoginRoute = require("./routes/loginRoute");
const UserRoute = require("./routes/userRoute");

app.use("/api/questions", QuestionsPageRoute);

app.use("/api/answer", AnswerPageRoute);

app.use("/api/signup", SignupRoute);

app.use("/api/login", LoginRoute);

app.use("/api/user", UserRoute);

if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port :${port}`));
