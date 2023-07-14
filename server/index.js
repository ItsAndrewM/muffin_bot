const { getPics } = require("./utils/getPics");
const { tweetPic } = require("./utils/tweetPic");

let counter = 425;
let intervalId;
const pics = getPics(1);
const targetCounter = pics.total_results;

const postMuffinPhoto = async () => {
  const result = await tweetPic(counter);
  console.log(`Function called. Counter: ${counter}`);
  counter++;
  if (counter > targetCounter) {
    clearInterval(intervalId);
    console.log("Interval stopped.");
  }
};

const startFunctionWithInterval = () => {
  // Initial call
  postMuffinPhoto();

  // Set interval to call the function every 60 seconds
  const intervalId = setInterval(() => {
    postMuffinPhoto();
  }, 10800000);
};

// Start the function with interval
startFunctionWithInterval();
