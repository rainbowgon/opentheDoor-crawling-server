import masterKeyInfoCrawl from "./src/informationCrawlers/masterkey/run.js";
import masterKeyTimeCrawl from "./src/timeCrawlers/masterkey/run.js";
import express from "express";
import http from "http";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// app.use("/public", express.static(__dirname + "/public"));

const server = http.createServer(app);
const PORT = 3000;

app.get("/info/masterkey", async (req, res) => {
  const isSucceed = await masterKeyInfoCrawl();
  res.json({
    isSucceed,
  });
});

app.get("/time/masterkey", async (req, res) => {
  await masterKeyTimeCrawl(0);
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
