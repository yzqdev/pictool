import express from "express";
import * as fs from "fs";
import { getBilibili, getQuanMihoyo, startDownload } from "./downloadService";
import { corsMiddleWare } from "./cors";
let port = 8751;
const app = express();

corsMiddleWare(app);
// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/download", (req, res) => {
  startDownload()
    .then(() => {
      console.log("下载完成");
      res.send({
        success: true,
        download: true,
      });
    })
    .catch((err) => {
      res.send({
        success: true,
        err: err,
      });
    });
});
app.use(express.static("src/imgs"));
app.get("/imgs", (req, res) => {
  let imgs = fs.readdirSync("src/imgs");
  res.send({
    imgs: imgs,
    len: imgs.length,
  });
});
app.get("/avatar/:id", async (req, res) => {
  await getQuanMihoyo(req, res);
});
app.get("/bili", async (req, res) => {
  await getBilibili(req, res);
});
app.get("/delTrash", (req, res) => {
  fs.rm("trash", { recursive: true, force: true }, (err) => {
    if (err) {
      res.send({
        err: err,
      });
      throw err;
    } else {
      res.send({
        success: true,
      });
    }
  });
});
app.post("/deleteImg/:id", async (req, res) => {
  console.log(req.params);
  if (!fs.existsSync("trash")) {
    fs.mkdirSync("trash");
  }
  fs.rename("src/imgs/" + req.params.id, "trash/" + req.params.id, (err) => {
    if (err) {
      res.send({
        success: false,
      });
      throw err;
    }
    res.send({
      success: true,
      imgName: req.params,
    });
  });
  // fs.unlink('src/imgs/'+req.params.id,(err) => {
  //
  // })
});

app.listen(port);
console.log("http://localhost:" + port);
