require("dotenv").config({
  path: "../.env",
});
const { getPics } = require("../utils/getPics");
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGO_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const importPics = async () => {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    let pageNum = 1;
    // Send a ping to confirm a successful connection
    const db = await client.db("muffinBot");
    const pics = await db.collection("pics");

    const muffins = await getPics(1);
  } catch (error) {
    return `ERROR: ${error}`;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};

importPics();

module.exports = { importPics };
