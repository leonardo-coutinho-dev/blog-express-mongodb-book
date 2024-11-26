const express = require("express");

const path = require("path");

const app = new express();

app.use(express.static("public"));

const PORT = 4000;

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/contact.html"));
});

app.get("/blog", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/blog.html"));
});

app.get("*", (req, res) => {
  res.writeHead(404);
  res.end("404 - Not found");
  console.log(req.url);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
