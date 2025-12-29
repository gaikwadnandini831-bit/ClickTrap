const express = require("express");
const { analyzeClickTrap } = require("./clicktrap_core");

const app = express();
app.use(express.json());

app.post("/check", (req, res) => {
  const { message } = req.body;

  const result = analyzeClickTrap(message || "");
  res.json(result);
});

app.get("/", (req, res) => {
  res.send("ClickTrap backend is running");
});

app.listen(3000, () => {
  console.log("ClickTrap server running on port 3000");
});
