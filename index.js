const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ some: "json" });
});
const PORT = proces.env.PORT || 5000;
app.listen(PORT);
