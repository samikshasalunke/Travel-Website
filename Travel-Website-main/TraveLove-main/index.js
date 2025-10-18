import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;

// Allow frontend files to access backend
app.use(express.static(".")); // Serves index.html and assets from same folder

// Route to get location data
app.get("/api/locations", (req, res) => {
  fs.readFile("./locations.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Error reading locations.json" });
      return;
    }
    res.json(JSON.parse(data));
  });
});

// You can add more routes for other JSON files
app.get("/api/hotdeals", (req, res) => {
  fs.readFile("./hotDeals.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Error reading hotDeals.json" });
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${3000}`);
});
