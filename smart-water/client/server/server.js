const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

app.post("/analyze", (req, res) => {
  const { supply, demand } = req.body;

  let result = "";

  if (supply < demand) {
    result = `🔴 Shortage of ${demand - supply} liters`;
  } else if (supply > demand) {
    result = `🟢 Excess of ${supply - demand} liters`;
  } else {
    result = "🟢 Balanced supply";
  }

  res.json({ result });
});

app.listen(5000, () => {
  console.log("🚀 Server running at http://localhost:5000");
});