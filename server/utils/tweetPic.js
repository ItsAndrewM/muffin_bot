require("dotenv").config({
  path: "./.env",
});
const Twit = require("twit");
const { getPics } = require("./getPics");
const download = require("download");

const tweetPic = async (pageNum) => {
  try {
    const T = await new Twit({
      consumer_key: process.env.TWITTER_API_KEY,
      consumer_secret: process.env.TWITTER_API_SECRET,
      access_token: process.env.TWITTER_ACCESS_TOKEN,
      access_token_secret: process.env.TWITTER_ACCESS_SECRET,
    });

    const imageData = await getPics(pageNum);
    const url = imageData.photos[0].src.large2x;
    const altText = imageData.photos[0].alt;
    const picName =
      imageData.photos[0].src.original.split("/")[
        imageData.photos[0].src.original.split("/").length - 1
      ];

    const filePath = "./assets";
    const downloaded = await download(url, filePath);
    const mediaData = `./assets/${picName}`;

    T.postMediaChunked({ file_path: mediaData }, (err, data, response) => {
      if (!err) {
        const mediaIdStr = data.media_id_string;
        const params = {
          media_ids: [mediaIdStr],
          alt_text: { text: altText },
        };
        T.post("statuses/update", params, (err, data, response) => {
          if (!err) {
            console.log("Image posted successfully!");
          } else {
            throw new Error("Error occurred while posting the image:", err);
          }
        });
      } else {
        throw new Error("Error occurred while uploading the image:", err);
      }
    });
  } catch (error) {
    return `error: ${error}`;
  }
};

module.exports = { tweetPic };
