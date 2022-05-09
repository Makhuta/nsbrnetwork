const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/*", (req, res) => {
  res.json({
    test: "test"
  });
  console.info(req.url)
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
