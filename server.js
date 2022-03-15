const express = require("express");
const cookieSession = require("cookie-session");
const path = require("path");

const FeedbackService = require("./services/FeedbackService");
const SpeakersService = require("./services/SpeakerService");

const feedbackService = new FeedbackService("./data/feedback.json");
const speakersService = new FeedbackService("./data/speakers.json");

const routes = require("./routes");

const app = express();

const port = 8000;

app.set("trust proxy", 1);

app.use(
  cookieSession({
    name: "session",
    keys: ["xcsfsd", "scdaa"],
  })
);

app.use(express.static(path.join(__dirname, "./static")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(
  "/",
  routes({
    feedbackService,
    speakersService,
  })
);

app.listen(port, () => {
  console.log(`Express to port ${port}`);
});
