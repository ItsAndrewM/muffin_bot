require("dotenv").config({
  path: "./.env",
});

const { createClient } = require("pexels");

const query = "muffin";

const getPics = async (pageNum) => {
  const client = await createClient(process.env.PEXELS_KEY);

  return client.photos
    .search({ query, page: pageNum, per_page: 1 })
    .then((photos) => {
      return photos;
    })
    .catch((error) => {
      return error;
    });
};

module.exports = { getPics };
